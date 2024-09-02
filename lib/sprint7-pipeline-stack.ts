// Import statements

import { Stack, StackProps, SecretValue } from 'aws-cdk-lib';                                                                           //  For stack class and for fetching secret from secretsmanager
import { Role, ServicePrincipal, ManagedPolicy, CompositePrincipal } from 'aws-cdk-lib/aws-iam';                                        //  For creating pipeline IAM Role
import { CodePipeline, CodePipelineSource, CodeBuildStep, ShellStep, ManualApprovalStep } from 'aws-cdk-lib/pipelines';                 //  For creating code pipeline
import { GitHubTrigger } from 'aws-cdk-lib/aws-codepipeline-actions';                                                                   //  For Setting the github as trigger for the pipeline
import { Construct } from 'constructs';                                                                                                 //  AWS Construct Library
import { sprint7FarhanInfraStage } from '../lib/sprint7-infra-stage';                                                                   //  For Staging

// Defination Statements

export class sprint7FarhanPipelineStack extends Stack {                                                                                 // Main stack class
    constructor(scope: Construct, id: string, props?: StackProps) {                                                                     // Stack Initialization function
        super(scope, id, props);
        
        // Create IAM role for pipeline
        
        const PipelineRole = new Role(this, 'cwRole', {                                                                                 // IAM Role for the pipeline
            assumedBy: new CompositePrincipal(                                                                                          // Composite Principle
                new ServicePrincipal("lambda.amazonaws.com"),                                                                           // Lambda Default Permissions
                new ServicePrincipal("sns.amazonaws.com"),                                                                              // Lambda SNS Permissions
                new ServicePrincipal("codebuild.amazonaws.com")                                                                         // Lambda CodeBuild Permissions
            ),
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),                                     // AWS Lambda basic execution role
                ManagedPolicy.fromAwsManagedPolicyName('CloudWatchFullAccess'),                                                         // AWS Cloudwatch full access role
                ManagedPolicy.fromAwsManagedPolicyName("AmazonDynamoDBFullAccess"),                                                     // AWS DynamoDB full access role
                ManagedPolicy.fromAwsManagedPolicyName("AwsCloudFormationFullAccess"),                                                  // AWS CloudFormation full access role
                ManagedPolicy.fromAwsManagedPolicyName("AWSCodePipeline_FullAccess"),                                                   // AWS Code Pipeline full access role
                ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess"),                                                           // AWS S3 full access role
                ManagedPolicy.fromAwsManagedPolicyName("AmazonAPIGatewayInvokeFullAccess"),                                             // AWS API Gateway full access role
            ],
            description: "This is a IAM role for the application pipeline",                                                             // Description of the IAM Role
        });
        
        // Create constants that will be used by the pipeline
        
        const pipelineTrigger = GitHubTrigger.POLL                                                                                      // Create pipeline trigger
        const piplineSecret = SecretValue.secretsManager("farhan_voyager_github")                                                       // Set iam roles for pipeline
        
        // Create Pipeline
        
        const pipeline = new CodePipeline(this, 'Pipeline_Farhan_Voyager', {                                                            // Create Pipeline
            pipelineName: 'Pipeline_Farhan_Voyager',                                                                                    // Set name for the pipeline
            synth: new CodeBuildStep('Synth', {                                                                                         // Set cdk synth configuration for pipeline
                input: CodePipelineSource.gitHub("farhan2022skipq/Voyager", "main", {                                                   // Set pipeline input method as github
                        authentication:piplineSecret,                                                                                   // Github repo name
                        trigger: pipelineTrigger,                                                                                       // Github repo branch
                        
                }),
                commands: [                                                                                                             // Set commands to be used while creating pipeline stages
                  'cd ./farhan/sprint7',                                                                                                // Change directory to the application folder
                  'npm install',                                                                                                        // Install application requirements
                  "npm install -g aws-cdk",                                                                                             // Instal aws cdk
                  'cd ./layers/nodejs',                                                                                                 // Change directory to the layers/nodejs folder
                  'npm install',                                                                                                        // Install layer requirements
                  'cd ../..',                                                                                                           // Change directory back to the application folder
                  'cd frontend',                                                                                                        // Change directory to the frontend folder
                  'npm install',                                                                                                        // Install frontend requirements
                  'cd ..',                                                                                                              // Change directory back to the application folder
                  'npx cdk synth'                                                                                                       // Create cloudformation template
                ],
                primaryOutputDirectory: "./farhan/sprint7/cdk.out",                                                                     // Output directory for application deployment
                role: PipelineRole                                                                                                      // Giving required roles to the pipeline
            }),
        });
        
        // Define stages
        
        const beta = new sprint7FarhanInfraStage(this, "beta", {env: { account: '315997497220', region: 'us-west-1' },})                // Create beta stage
        const prod = new sprint7FarhanInfraStage(this, "prod", {env: { account: '315997497220', region: 'us-west-1' },})                // Create prod stage
        
        // Define initial tests
        
        const init_test = new ShellStep("Unit Test", {                                                                                  // Set unit tests for beta stage
            commands:[                                                                                                                  // Set commands to be used while testing the beta stage
                        "cd ./farhan/sprint7",                                                                                          // Change directory to the application folder
                        "npm install",                                                                                                  // Install application development stage requirements
                        "npm install -g aws-cdk",                                                                                       // Instal aws cdk
                        "npm run test"                                                                                                  // Run Tests
                    ]   
        })
        
        pipeline.addStage(beta, {                                                                                                       // Add beta stage to the pipeline
            pre: [init_test]                                                                                                            // Make sure that stage is only deployed if it passes the unit tests
        })
        pipeline.addStage(prod, {                                                                                                       // Add beta stage to the pipeline
            pre: [new ManualApprovalStep("Farhan-Approval")]                                                                            // Make sure that stage is only deployed if it is manually approved
        })
    }
}