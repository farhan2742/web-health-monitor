// Import statements

import * as cdk from 'aws-cdk-lib';                                                          // AWS CDK
import { Template } from 'aws-cdk-lib/assertions';                                           // For creating templates
import * as sprint7 from '../lib/sprint7-stack';                                             // Stack to be tested

//  Tests

// Test if our application have correct no of resources

test('test bucket count', () => {                                                            // Test to check if we have correct no of buckets
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::S3::Bucket", 1);                                           // Bucket count
});

test('test lambda count', () => {                                                            // Test to check if we have correct no of Lambda functions
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::Lambda::Function", 5);                                     // Lambda Function count
});

test('test alarm count', () => {                                                             // Test to check if we have set correct no of alarms
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::CloudWatch::Alarm", 6);                                    // CloudWatch Alarm count
});

test('test sns count', () => {                                                               // Test to check if we have correct no of sns rules
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::SNS::Subscription", 2);                                    // SNS Topic count
});

test('test dynamoDB count', () => {                                                          // Test to check if we have correct no of DynamoDB Tables
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::DynamoDB::Table", 1);                                      // DynamoDB Table count
});

test('test rule count', () => {                                                              // Test to check if we have correct no of Event Rules
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.resourceCountIs("AWS::Events::Rule", 1);                                         // Event Rule count
});

// Test if the sns topic have correct protocols and endpoints

test('test email SNSsubscription', () => {                                                   // Test to check if our sns topic have email subcription and it's endpoint is correct
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.hasResourceProperties("AWS::SNS::Subscription", {                                // Resource name
        "Protocol": "email",                                                                 // SNS Subcription Name
        "Endpoint": "farhan.kiyani.skipq@gmail.com"                                          // SNS Subscripton End Point 
        })
   });


test('test lambda SNSsubscription', () => {                                                  // Test to check if our sns topic have lambda subcription and it's endpoint is correct
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in tests
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.hasResourceProperties("AWS::SNS::Subscription", {                                // SNS Subcription Name
   "Protocol": "lambda",                                                                     // SNS Subscripton type is Lambda
        "Endpoint": {                                                                        // SNS Subscripton End Point        
          "Fn::GetAtt": [                                                                    // test If its a lambda function
            "updateDB5B429E44",                                                              // Lambda function ARN
            "Arn"                                                                            // Endpoint Specification
            ]
        }
   });
});


// Test if we have created a cron job for web health function

test('test cronexpression rule', () => {                                                     // Tests if the webhealth lambda is getting invoked every minute by cron job
   const app = new cdk.App();                                                                // Define App
   const stack = new sprint7.sprint7FarhanStack(app, 'MyTestStack');                         // Define the stack to be used in test
   const template = Template.fromStack(stack);                                               // Create the template to use in our tests
   template.hasResourceProperties("AWS::Events::Rule", {                                     // Resource name
        "ScheduleExpression": "cron(* * * * ? *)",                                           // test if the rule is scheduled correctly
        "State": "ENABLED",                                                                  // test if the rule is enables
      })
   });