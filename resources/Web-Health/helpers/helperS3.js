// import statements

const { S3 } = require('aws-sdk');                                                      // AWS SDK clinet for S3


// Defination Statements

class HelperS3 {                                                                        // Helper class for S3
    
    res                                                                                 // Define a variable to hold response
    client                                                                              // Create a Client Variable
    
    process = (err, data) => {                                                          // Method to process file and convert it into usable format
        if (err) console.log(err, err.stack);                                           // an error occurred
        else this.res = JSON.parse(data.Body.toString('utf-8'));                        // Convert the data into string and parse it as a json
    }
    
    
    constructor() {                                                                     // Constructor
        this.client = new S3({ region: "us-west-1" });                                  // Created a new S3 Client and assign it to the Client variable
    }
    
    async downloadObj(bucketName, key) {                                                // A helper method to download a file from S3 Bucket

        let input = {                                                                   // Define the input
            Bucket: bucketName,                                                         // Bucket Name
            Key: key                                                                    // File Name
        };
        
        await this.client.getObject(input, this.process).promise();                     // Fetch the file and process it using function
        return this.res                                                                 // Return Response after Processing
    }
};

const helperS3 = new HelperS3();                                                        // AWS SDK clinet for S3

exports.helperS3 = helperS3
