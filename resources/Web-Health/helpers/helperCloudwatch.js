// import statements

const { CloudWatchClient, PutMetricDataCommand, PutMetricAlarmCommand, DeleteAlarmsCommand, GetMetricStatisticsCommand} = require('@aws-sdk/client-cloudwatch');                                                   // AWS SDK clinet for DynamoDB
const moment = require('moment')

// Defination Statements

class HelperCloudwatch {                                                                                                                    // Helper class for CloudWatch

    client = new CloudWatchClient({ region: "us-west-1" });                                                                                 // Create a new CloudWatchClient
    
    async putMatricCW (                                                                                                                     // Create a helper method to put data into a cloudwatch metric
        nameSpace, 
        metricName, 
        dimensions, 
        value
    ) {                   
        
        const input = {                                                                                                                     // Define the input
            
            Namespace:nameSpace,                                                                                                            // Namespace of the Metric
            MetricData: [
                {
                    MetricName: metricName,                                                                                                 // Name of the Metric
                    Dimensions: [                                                                                                           // Dimensions of the Metric
                        {
                            Name: "URL",                                                                                                    // Key of dimension
                            Value: dimensions                                                                                               // Value of dimension
                        },
                    ],
                    Value: value,                                                                                                           // Value to be inserted
                }
            ]         
        }
        
        const command = new PutMetricDataCommand(input);                                                                                    // Set the command to put data
        const response = await this.client.send(command);                                                                                   // Execute the command
    }
    
    async putMatricAlarmCW (                                                                                                                // Create a helper method to put data into a cloudwatch metric
        alarmName, 
        comparisonOperator, 
        nameSpace, 
        metricName, 
        dimensions, 
        threshold,
        action
    ) {                   
        
        const input = {                                                                                                                     // Define the input
            
            AlarmName: alarmName,                                                                                                           // Namespace of the Metric
            ComparisonOperator: comparisonOperator,
            EvaluationPeriods: "1",
            DatapointsToAlarm: "1",
            MetricName: metricName,                                                                                                         // Name of the Metric
            Namespace: nameSpace,
            Threshold: threshold,
            Statistic: "Average",
            Period: "60",
            AlarmActions: [action],
            Dimensions: [                                                                                                                   // Dimensions of the Metric
                {
                    Name: "URL",                                                                                                            // Key of dimension
                    Value: dimensions                                                                                                       // Value of dimension
                },
            ]
        }
        
        const command = new PutMetricAlarmCommand(input);                                                                                    // Set the command to put data
        const response = await this.client.send(command);                                                                                    // Execute the command
    }
    
    async deleteAlarmCW (                                                                                                                    // Create a helper method to put data into a cloudwatch metric
        alarmNames, 
    ) {                   
        
        const input = {                                                                                                                       // Define the input
            
            AlarmNames: alarmNames,                                                                                                           // Namespace of the Metric
            
        }
    }
    
    async getMetricDataCW (metricName, namespace, url) {
        
        const input = {                                                                                                                       // Define the input
            
            EndTime: moment().subtract(180, "minutes").utc().format(),                                                                      // Namespace of the Metric
            MetricName: metricName,
            Namespace: namespace,
            Period: 3600,
            StartTime: moment().subtract(7, "days").utc().format(),
            Dimensions: [
              {
                Name: "URL",
                Value: url,
              },
            ],
            Statistics: ["Average"],
            
        }
        const command = new GetMetricStatisticsCommand(input);                                                                                    // Set the command to put data
        const response = await this.client.send(command); 
    } 
};

const helperCloudwatch = new HelperCloudwatch();                                                                                              // Return an instance of helper class

exports.helperCloudwatch = helperCloudwatch