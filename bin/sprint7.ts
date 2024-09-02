// Import statements

import * as cdk from 'aws-cdk-lib';                                                                         // AWS CDK Libraray
import { sprint7FarhanPipelineStack } from '../lib/sprint7-pipeline-stack';                                 // Entry point stack file

// Defination Statements

const app = new cdk.App();                                                                                  // App Defination

cdk.Tags.of(app).add('cohort', 'Voyager');                                                                  // Tag to help SkipQ indentify resource usage of cohort
cdk.Tags.of(app).add('name', 'Voyager');                                                                    // Tag to help SkipQ indentify resource usage of student

new sprint7FarhanPipelineStack(app, 'sprint7FarhanPipelineStack', {                                         // Stack Defination

   env: { account: '315997497220', region: 'us-west-1' },                                                   // Region Defination
  
});

app.synth();