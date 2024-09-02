// import statements

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");                 // AWS SDK clinet for DynamoDB

// Defination Statements

class HelperDynamoDB {                                                                          // Helper class for DynamoDB

    client = new DynamoDBClient({ region: "us-west-1" });                                       // Create a new DynamoDBClient
    
    async putItemDB(this: HelperDynamoDB, tablename: string, item: {}) {                        // Create a helper method to put item into the DB
    
        const input = {                                                                         // Define the input
            TableName: tablename,                                                               // Set table name
            Item: item                                                                          // Set the item that will be inserted
        }
        
        const command = new PutItemCommand(input);                                              // Set the command to put item
        const response = await this.client.send(command);                                       // Execute the command
    }
};

export const helperDynamoDB = new HelperDynamoDB();                                             // Return an instance of helper class
