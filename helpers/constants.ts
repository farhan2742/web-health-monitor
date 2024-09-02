export const DYNAMO_DB_KEY="MessageID"                                                  // Primary Key for DynamoDB Table
export const DYNAMO_DB_SORT="TimeStamp"                                                 // Secondary Key for DynamoDB Table
export const DYNAMO_DB_POLICY = "AmazonDynamoDBFullAccess"                              // Managed Policy for AWS DynamoDB
export const CLOUD_WATCH_NAMESPACE = "Voyager_Farhan"                                   // Namespace for the metrics we will create for cloudwatch
export const CLOUD_WATCH_DIMENSION_LATENCY = "Latency"                                  // Metric name for latency metric
export const CLOUD_WATCH_DIMENSION_AVAILABILITY = "Availability"                        // Metric name for availability metric
export const CLOUD_WATCH_POLICY = "CloudWatchFullAccess"                                // Managed Policy for AWS CloudWatch
export const S3_POLICY = "AmazonS3FullAccess"                                           // Managed Policy for AWS S3
export const API_GATEWAY_POLICY = "AmazonAPIGatewayInvokeFullAccess"                    // Managed Policy for AWS API Gateway
export const MONGO_DB_URI =                                                             // MongoDB URI
"mongodb+srv://farhan:skipq2742@cluster0.xxsie.mongodb.net/webHealth?retryWrites=true&w=majority";
export const URLS_TO_MONITOR = [                                                        // URL That we will monitor
    'http://www.skipq.org',
    'http://www.google.com',
    'http://www.ign.com',
    'http://www.facebook.com',
    'http://www.aliexpress.com'
]