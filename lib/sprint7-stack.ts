// Import statements

import { Stack, StackProps, RemovalPolicy, Duration } from 'aws-cdk-lib';                                                                   // For Stack Fucntions and for Removal Policy Management
import { Bucket, CorsRule, HttpMethods } from 'aws-cdk-lib/aws-s3';                                                                         // For creating a S3 bucket
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';                                                                            // For creating a DynamoDB Table
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';                                                                   // For uploading files to the created bucket
import { Role, ServicePrincipal, PolicyStatement, ManagedPolicy, CompositePrincipal  } from 'aws-cdk-lib/aws-iam';                          // For IAM Roles
import { Function as LambdaFun, Runtime, Code, Alias, LayerVersion } from 'aws-cdk-lib/aws-lambda';                                         // For Lambda Fucntions
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';                                                                                    // For For Lambda events
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';                                                                            // For For Lambda targets
import { Topic } from 'aws-cdk-lib/aws-sns';                                                                                                // For creating an SNS topic
import { EmailSubscription, LambdaSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';                                                  // For adding subcriptions to the SNS topic
import { Metric, Alarm, ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';                                                             // For create metrics and alarms 
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';                                                                             // For setting actions to the alarms
import { LambdaDeploymentGroup, LambdaDeploymentConfig } from 'aws-cdk-lib/aws-codedeploy';                                                 // For creating Alis and Deployment Groups
import {  LambdaRestApi, Integration, IntegrationType } from 'aws-cdk-lib/aws-apigateway'                                                                                 // For creating lambda backed apigateway
import { Construct } from 'constructs';                                                                                                     // AWS Construct Library
import * as path from 'path';                                                                                                               // For setting the path
import * as constants from '../helpers/constants'                                                                                           // Constants file



// Defination Statements

export class sprint7FarhanStack extends Stack {                                                                                             // Main stack class
  constructor(scope: Construct, id: string, props?: StackProps) {                                                                           // Stack Initialization function
    super(scope, id, props);                                                                                                                

    // Create a cors rule for S3 bucket
    
    const corsRule: CorsRule = {                                                                                                            // Create a CORS Rule
      allowedMethods: [HttpMethods.GET],                                                                                                    // Allowed method for access
      allowedOrigins: ['*']                                                                                                                 // Allowed Headers for access
    };
    
    // Create S3 Bucket
    
    const websiteBucket = new Bucket(                                                                                                       // Create a Public S3 bucket
      this,                                                                                                                                 // Scope
      "sprint7WebsiteBucket",                                                                                                               // Bucket ID
      {
        publicReadAccess: true,                                                                                                             // Public Read Access
        autoDeleteObjects: true,                                                                                                            // Delete files in the bucket during removal
        websiteIndexDocument: 'index.html',                                                                                                 // Entry Point to Frontend Website
        websiteErrorDocument: 'error.html',
        cors:  [corsRule],                                                                                                                  // CORS Configuration
        removalPolicy: RemovalPolicy.DESTROY                                                                                                // Destroy bucket with stack
      }
    );
    const websiteBucketName = websiteBucket.bucketName;                                                                                     // Fetch the name of the bucket that was created earlier
    
    // Deploy files to s3 bucket
    
    const Websitedeployment = new BucketDeployment(this, 'DeployWebsite', {                                                                 // Deploy files to the s3 bucket
      sources: [Source.asset('./frontend/build')],                                                                                          // Location of the files to be uploaded
      destinationBucket: websiteBucket,                                                                                                     // Name of the bucket where files will be uploaded
      prune: false                                                                                                                          // Dont delete existing files when a new file is uploaded
    });
    
    // Create DynamoDB Table
    
    const table = new Table(
        this,                                                                                                                               // Scope
        "Farhan_Voyager_WHDB",                                                                                                              // ID of the S3 Bucket
        {
            partitionKey: { name: constants.DYNAMO_DB_KEY, type: AttributeType.STRING },                                                    // Partition Key for the table
            sortKey: {name: constants.DYNAMO_DB_SORT, type: AttributeType.STRING },                                                         // Sort Key for the table 
            contributorInsightsEnabled: true,                                                                                               // Enable cloudwatch contributer insights
            removalPolicy: RemovalPolicy.DESTROY                                                                                            // Set removal policy 
        }
    );
    
    const tableName = table.tableName;                                                                                                      // Fetch the name of the Table that was created earlier
    
    // Create IAM Roles and add Policies to IAM Roles
    
    const cwRole = new Role(this, 'cwRole', {                                                                                               // Function to create IAM Roles
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),                                                                              // Set default policy for the role
      description: "This is a IAM role for the webHealthLabda",                                                                             // Set the IAM role's description
    });
    
    cwRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(constants.CLOUD_WATCH_POLICY));                                          // Add a managed policy to the role
    cwRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(constants.S3_POLICY));                                                   // Add a managed policy to the role
    
    const dyDbRole = new Role(this, 'dyDbRole', {                                                                                           // Function to create IAM Roles
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),                                                                              // Set default policy for the role
      description: "This is a IAM role for the updateDBLambda",                                                                             // Set the IAM role's description
    });
    
    dyDbRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(constants.DYNAMO_DB_POLICY));                                          // Add a managed policy to the role
    
    const apiRole = new Role(this, 'apiRole', {                                                                                             // Function to create IAM Roles
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),                                                                              // Set default policy for the role
      description: "This is a IAM role for the updateDBLambda",                                                                             // Set the IAM role's description
    });
    
    apiRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(constants.API_GATEWAY_POLICY));                                        // Add a managed policy to the role
    apiRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(constants.CLOUD_WATCH_POLICY));                                        // Add a managed policy to the role
    
    const EmailLambdaTopic = new Topic(this, 'EmailLambdaTopic', {                                                                          // Create a new SNS topic
      displayName: 'Email and Lambda alarm topic',                                                                                          // Display name of the topic
    });
    
    const EmailLambdaTopicARM = EmailLambdaTopic.topicArn
    
    // Create Lambda Layers
    
    const lambdaLayer = new LayerVersion(this, 'DependancyLayer', {                                                                         // Create a dependancy layer for lambda fuctions
      removalPolicy: RemovalPolicy.DESTROY,                                                                                                 // Set removal policy for the lambda layer
      code: Code.fromAsset(path.join(__dirname, '../layers')),                                                                              // Set path of files for the lambda layer
      compatibleRuntimes: [Runtime.NODEJS_14_X],                                                                                            // Set the runtime environment for the lambda layer
    });
    
    // Create Lambda Functions
    
    const WebHealthLambda = new LambdaFun(this, 'WebHealth', {                                                                              // Create a lambda function
      runtime: Runtime.NODEJS_14_X,                                                                                                         // Set runtime library of the lambda function
      handler: './webHealthLambda.WebHealth',                                                                                               // Set the handler of the lambda function
      code: Code.fromAsset(path.join(__dirname, '../resources/Web-Health')),                                                                // Set the location of the code for the lambda function
      layers: [lambdaLayer],                                                                                                                // Set the dependancy layer for the lambda function
      role: cwRole,                                                                                                                         // Set the IAM Role for the lambda function
      timeout: Duration.minutes(1)                                                                                                          // Set timeout duration of the lambda function
    });
    
    //WebHealthLambda.addEnvironment("BUCKET_NAME",bucketName);                                                                               // Add the name of the bucket as environment variable
    WebHealthLambda.addEnvironment("CLOUD_WATCH_NAMESPACE",constants.CLOUD_WATCH_NAMESPACE);                                                // Add the Metrics Name Space as environment variable
    WebHealthLambda.addEnvironment("CLOUD_WATCH_DIMENSION_LATENCY",constants.CLOUD_WATCH_DIMENSION_LATENCY);                                // Add the name of the Latency Metric as environment variable
    WebHealthLambda.addEnvironment("CLOUD_WATCH_DIMENSION_AVAILABILITY",constants.CLOUD_WATCH_DIMENSION_AVAILABILITY);                      // Add the name of the Availability Metric  as environment variable
    WebHealthLambda.addEnvironment("ACTION_ARN",EmailLambdaTopicARM);
    //WebHealthLambda.addEnvironment("MONGO_DB_URI",constants.MONGO_DB_URI);                                                                  // Add the name of the Availability Metric  as environment variable
    
    const UpdateDBLambda = new LambdaFun(this, 'updateDB', {                                                                                // Create a lambda function
      runtime: Runtime.NODEJS_14_X,                                                                                                         // Set runtime library of the lambda function
      handler: 'updateDBLambda.updateDBSNS',                                                                                                // Set the handler of the lambda function
      code: Code.fromAsset(path.join(__dirname, '../resources/Dynamo-Log')),                                                                // Set the location of the code for the lambda function
      layers: [lambdaLayer],                                                                                                                // Set the dependancy layer for the lambda function
      role: dyDbRole,                                                                                                                       // Set the IAM Role for the lambda function
      timeout: Duration.minutes(1)                                                                                                          // Set timeout duration of the lambda function
    });                                                                                                                                     
    
    UpdateDBLambda.addEnvironment("DYNAMO_DB_NAME",tableName);                                                                              // Add the name of the table as environment variable
    UpdateDBLambda.addEnvironment("DYNAMO_DB_KEY",constants.DYNAMO_DB_KEY);                                                                 // Add the name of Table's Partition Key as environment variable
    UpdateDBLambda.addEnvironment("DYNAMO_DB_SORT",constants.DYNAMO_DB_SORT);                                                               // Add the name of Table's Sort Key as environment variable
    
    const ServerLambda = new LambdaFun(this, 'serverLambda', {                                                                              // Create a lambda function
      runtime: Runtime.NODEJS_14_X,                                                                                                         // Set runtime library of the lambda function
      handler: 'serverLambda.handler',                                                                                                      // Set the handler of the lambda function
      code: Code.fromAsset(path.join(__dirname, '../resources/server')),                                                                    // Set the location of the code for the lambda function
      layers: [lambdaLayer],                                                                                                                // Set the dependancy layer for the lambda function
      role: apiRole,                                                                                                                        // Set the IAM Role for the lambda function
      timeout: Duration.minutes(5)                                                                                                          // Set timeout duration of the lambda function
    });   
    
    // Create API Gateway
    
    const api = new LambdaRestApi(this, 'Farhan_Voyager_API', {                                                                             // Create a new RESTful Api
      handler: ServerLambda,                                                                                                                // Handler for the api
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
          'x-requested-with'
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: false,
        allowOrigins: ['*'],
      },
      proxy: false                                                                                                                          // Proxy to be false
    })
    
    const Root      = api.root.addResource('url');                                                                                          // Add root path to api
    const Create    = Root.addResource('add');                                                                                              // Add create path to api
    const Stats     = Root.addResource('stats');                                                                                              // Add stats path to api
    const Read      = Root.addResource('fetch');                                                                                            // Add read path to api
    const Update    = Root.addResource('update');                                                                                           // Add update path to api
    const Delete    = Root.addResource('delete');                                                                                           // Add delete path to api
    const subUrls   = Root.addResource('subUrls');                                                                                          // Add delete path to api
    const RootAuth  = api.root.addResource('users');
    const Register  = RootAuth.addResource('register'); 
    const Login  = RootAuth.addResource('login');
    const Current  = RootAuth.addResource('current');
    
    Read.addMethod('GET');                                                                                                                  // Add GET method to read path
    Create.addMethod('POST');                                                                                                               // Add POST method to create path
    Stats.addMethod('POST');                                                                                                               // Add POST method to create path
    subUrls.addMethod('POST');                                                                                                              // Add Post method to subURL path
    Update.addMethod('PUT');                                                                                                                // Add PUT method to update path
    Delete.addMethod('DELETE');                                                                                                             // Add Delete method to delete path
    Register.addMethod('POST');
    Login.addMethod('POST');
    Current.addMethod('GET');
    
    // Create Rule to schedule Lambda Functon
    
    const rule = new Rule(this,"WebHealth_Schedule_Rule", {                                                                                 // Create a new schduler rule for web health lambda
      description: "Web Health Lambda Schedule Rule Farhan Kiyani Voyager",                                                                 // Rule Description
      schedule: Schedule.cron({ minute: '*'}),                                                                                              // Schedule creation using cron function
      targets: [new LambdaFunction(WebHealthLambda)]                                                                                        // Adding the target lambda function to be triggered by the rule
    });
    
    //  Create Topic for Alarms and add subscriptions to the topics
    
    EmailLambdaTopic.addSubscription(new EmailSubscription('farhan.kiyani.skipq@gmail.com'))                                                // Add email subscription to the topic
    EmailLambdaTopic.addSubscription(new LambdaSubscription(UpdateDBLambda))                                                                // Add lambda subscription to the topic
    
    
    const DeploymentGroupAlarmTopic = new Topic(this, 'DeploymentGroupAlarmTopic', {                                                        // Create a new SNS topic
      displayName: 'This topic is for deployment group failure alarms',                                                                     // Display name of the topic
    });
    
    // Create Metric for deployment groups
    
    const failure_metric_group1_1 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Duration",                                                                                                             // Name of the metric
        dimensionsMap: {"FunctionName":WebHealthLambda.functionName},
      });
      
    const failure_metric_group1_2 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Invocations",                                                                                                          // Name of the metric
        dimensionsMap: {"FunctionName":WebHealthLambda.functionName},                                                                       // Dimension map of the metric 
      });
      
    const failure_metric_group1_3 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Errors",                                                                                                               // Name of the metric
        dimensionsMap: {"FunctionName":WebHealthLambda.functionName},                                                                       // Dimension map of the metric 
      });
      
    const failure_metric_group2_1 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Duration",                                                                                                             // Name of the metric
        dimensionsMap: {"FunctionName":UpdateDBLambda.functionName},                                                                        // Dimension map of the metric 
      });
      
    const failure_metric_group2_2 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Invocations",                                                                                                          // Name of the metric
        dimensionsMap: {"FunctionName":UpdateDBLambda.functionName},                                                                        // Dimension map of the metric 
      });
      
    const failure_metric_group2_3 = new Metric({                                                                                            // Create a new metric
        namespace: "AWS/Lambda",                                                                                                            // Namespace of the metric
        metricName: "Errors",                                                                                                               // Name of the metric
        dimensionsMap: {"FunctionName":UpdateDBLambda.functionName},                                                                        // Dimension map of the metric 
      });
      
    // Create Alarms for deployment groups
    
    const failure_alarm_group1_1 = new Alarm(this, "WebHealthLambdaDurationAlarmFarhan", {                                                  // Create a new Alarm
        alarmDescription: "This alarms is triggered when the duration of a lambda function is too high",                                    // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 3500,                                                                                                                    // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered 
        metric: failure_metric_group1_1                                                                                                     // Metric over which the alarm will be set
      });
      
    const failure_alarm_group1_2 = new Alarm(this, "WebHealthLambdaInvocationAlarmFarhan", {                                                // Create a new Alarm
        alarmDescription: "This alarms is triggered when there are too many invocations of a lambda function",                              // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 10,                                                                                                                      // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered 
        metric: failure_metric_group1_2                                                                                                     // Metric over which the alarm will be set
      });
      
    const failure_alarm_group1_3 = new Alarm(this, "WebHealthLambdaErrorAlarmFarhan", {                                                     // Create a new Alarm
        alarmDescription: "This alarms is triggered when there are errors during execution of a lambda function",                           // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 0,                                                                                                                       // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered
        metric: failure_metric_group1_3                                                                                                     // Metric over which the alarm will be set
      });
      
      const failure_alarm_group2_1 = new Alarm(this, "UpdateDBLambdaDurationAlarmFarhan", {                                                 // Create a new Alarm
        alarmDescription: "This alarms is triggered when the duration of a lambda function is too high",                                    // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 500,                                                                                                                     // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered
        metric: failure_metric_group2_1                                                                                                     // Metric over which the alarm will be set
      });
      
    const failure_alarm_group2_2 = new Alarm(this, "UpdateDBLambdaInvocationAlarmFarhan", {                                                 // Create a new Alarm
        alarmDescription: "This alarms is triggered when there are errors during execution of a lambda function",                           // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 10,                                                                                                                      // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered
        metric: failure_metric_group2_2                                                                                                     // Metric over which the alarm will be set
      });
      
    const failure_alarm_group2_3 = new Alarm(this, "UpdateDBLambdaErrorAlarmFarhan", {                                                      // Create a new Alarm
        alarmDescription: "This alarms is triggered when there are errors during execution of a lambda function",                           // Description of the alarm
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,                                                                      // How the alarm will be compared with the threshold
        threshold: 0,                                                                                                                       // Threshold over which the alarm will be compared 
        evaluationPeriods: 1,                                                                                                               // How many time the threshold need to be breached before a alarm is triggered
        metric: failure_metric_group2_3                                                                                                     // Metric over which the alarm will be set
      });
      
    // Add actions to deployment group alarms
    
    failure_alarm_group1_1.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    failure_alarm_group1_2.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    failure_alarm_group1_3.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    failure_alarm_group2_1.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    failure_alarm_group2_2.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    failure_alarm_group2_3.addAlarmAction(new SnsAction(DeploymentGroupAlarmTopic))                                                         // Set an SNS action to that alarm
    
    // Create Alias for Lambda functions

    const aliasWebHealth = new Alias(this, 'WHLambdaAlias', {                                                                               // Create an alias for web health lambda function
      aliasName: 'WHLambdaCurrent',                                                                                                         // Name of the alias that will be created
      version: WebHealthLambda.currentVersion,                                                                                              // Version of the lambda function for the alias
    });
    
    const aliasUpdateDB = new Alias(this, 'UpdateDBLambdaAlias', {                                                                          // Create an alias for Update DB lambda function
      aliasName: 'UpdateDBLambdaCurrent',                                                                                                   // Name of the alias that will be created
      version: UpdateDBLambda.currentVersion,                                                                                               // Version of the lambda function for the alias
    });
    
    // Create Deployment Groups for Lambda Functions
    
    const deployment_group1 = new LambdaDeploymentGroup(this, 'Farhan_Prod_Deployment_WHL', {                                               // Create a deployment group for web health lambda function
      alias: aliasWebHealth,                                                                                                                // Alias that will be used in the deployment group
      deploymentConfig: LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_10MINUTES,                                                            // Deployment configuration for the deployment group
      alarms: [failure_alarm_group1_1,failure_alarm_group1_2,failure_alarm_group1_3]                                                        // Alarms that will be used for auto roll back
    });
    
    const deployment_group2 = new LambdaDeploymentGroup(this, 'Farhan_Prod_Deployment_UPDBL', {                                             // Create a deployment group for UpdateDB lambda function
      alias: aliasUpdateDB,                                                                                                                 // Alias that will be used in the deployment group
      deploymentConfig: LambdaDeploymentConfig.LINEAR_10PERCENT_EVERY_10MINUTES,                                                            // Deployment configuration for the deployment group
      alarms: [failure_alarm_group2_1,failure_alarm_group2_2,failure_alarm_group2_3]                                                        // Alarms that will be used for auto roll back
    });
    
  }
}
