// Import statements

import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// Defination Statements
/*
class HelperDyTb {
    
    constructor() {
        
      }
    
    createTable(this: Construct, id_: string, key: string, sort: string) {
        const table = new Table(
            this,
            id_,
            {
                partitionKey: { name: key, type: AttributeType.STRING },          // Partition Key for the table
                sortKey: {name: sort, type: AttributeType.STRING },            // Sort Key for the table 
                replicationRegions: ['us-east-1'],
                contributorInsightsEnabled: true,            // Enable cloudwatch contributer insights
                removalPolicy: RemovalPolicy.DESTROY          // Set removal policy 
            }
            
        )
        return table
    }
}

export const helperDyTb = new HelperDyTb()
*/

export function createTable(V: Construct,id_: string, key: string, sort: string){
    const table = new Table(
        V,
        id_,
        {
            partitionKey: { name: key, type: AttributeType.STRING },          // Partition Key for the table
            sortKey: {name: sort, type: AttributeType.STRING },            // Sort Key for the table 
            replicationRegions: ['us-east-1'],
            contributorInsightsEnabled: true,            // Enable cloudwatch contributer insights
            removalPolicy: RemovalPolicy.DESTROY          // Set removal policy 
        }
        
    )
}
