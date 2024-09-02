// Import statements

import { Stage, StageProps } from 'aws-cdk-lib';                                             // For stack functions
import { sprint7FarhanStack } from '../lib/sprint7-stack';                                   // Stack that will be staged
import { Construct } from 'constructs';                                                      // AWS Construct Library

// Defination Statements

export class sprint7FarhanInfraStage extends Stage {                                         // Main stage class
  constructor(scope: Construct, id: string, props?: StageProps) {                            // stage Constructor function
    super(scope, id, props);
    
        const sprint7Farhan = new sprint7FarhanStack(this, 'sprint7FarhanStack');            // Stage Main Sprint 6 stack file
    
    }
}