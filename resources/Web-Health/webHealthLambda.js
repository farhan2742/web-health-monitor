// Import statements
const   { env }             = require('process'),                                                       // Environment Variables
        axios               = require('axios'),                                                         // Http client library
        MongoClient         = require('mongodb').MongoClient,                                           // MongoDB Client
        ServerApiVersion    = require('mongodb').ServerApiVersion,                                      // MongoDB API version
        S3                  = require('./helpers/helperS3').helperS3,                                   // MongoDB API version
        util                = require('./helpers/utilities').utilities,                                 // MongoDB API version
        CW                  = require('./helpers/helperCloudwatch').helperCloudwatch,                   // MongoDB API version
        DB                  = require('./helpers/helperMongoDb').helperMongoDB;                         // MongoDB API version

// Defination Statements

async function WebHealth(event, context) {                                                              // Web health lambda handler
    
    // Dowload the file from s3 bucket
    
    let websites = await DB.fetchUrls();                                                                // Download the file using helper function
    
    // Set constants
    
    const nameSpace = env.CLOUD_WATCH_NAMESPACE                                                         // Set namespace of the Metrics
    const dimLatency = env.CLOUD_WATCH_DIMENSION_LATENCY                                                // Set Dimension of Latency Metric
    const dimAvailability = env.CLOUD_WATCH_DIMENSION_AVAILABILITY                                      // Set Dimension of Availbility Metric
    const action = env.ACTION_ARN                                      // Set Dimension of Availbility Metric
    
    // Put metrics on cloudwatch
   
    for (let website of websites) {                                                                     // Loop through each website
        
        const availbility = await util.Availability(website.url);                                       // Check availability
      
        if (availbility == 0) {                                                                         // If website is not available
            
            await CW.putMatricCW(                                                                       // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimAvailability,                                                                        // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                availbility                                                                             // Value that will be inserted into the Metric
            )
            
            await CW.putMatricCW (                                                                      // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimLatency,                                                                             // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                0                                                                                       // Value that will be inserted into the Metric
            )
        }
        
        else if (availbility == "Error") {                                                              // If there was an error checking the availability
            
            await CW.putMatricCW(                                                                       // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimAvailability,                                                                        // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                0                                                                                       // Value that will be inserted into the Metric
            )
            await CW.putMatricCW (                                                                      // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimLatency,                                                                             // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                0                                                                                       // Value that will be inserted into the Metric
            )
        }
        
        else {                                                                                          // If website is available and there are no errors
            
            const latency = await util.Latency(website.url)                                             // Calculate Latency
            
            await CW.putMatricCW(                                                                       // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimAvailability,                                                                        // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                availbility                                                                             // Value that will be inserted into the Metric
            )
            
            await CW.putMatricCW (                                                                      // Call putMatricCW of helperCloudWacth class to insert data into the metrics
                nameSpace,                                                                              // NameSpace of the CloudWatch Metric 
                dimLatency,                                                                             // Name of the Metric
                website.url,                                                                            // Dimension of the Metric
                latency                                                                                 // Value that will be inserted into the Metric
            )
        }
        
        await CW.putMatricAlarmCW (
            'Farhan_Availability_' + website.url, 
            'LessThanThreshold', 
            nameSpace, 
            dimAvailability, 
            website.url, 
            '1',
            action   
        )

        await CW.putMatricAlarmCW (
            'Farhan_Latency_' + website.url, 
            'GreaterThanThreshold', 
            nameSpace, 
            dimLatency, 
            website.url, 
            '0.3',
            action   
        )
    }
}

exports.WebHealth = WebHealth