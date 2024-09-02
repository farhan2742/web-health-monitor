// Import statements

import {helperDynamoDB as DyDB} from './helpers/helperDynamoDB'     // For putting the item into the DynamoDB
const { env } = require('process')                                  // Environment Variables 

// Defination Statements

export async function updateDBSNS(event:any,context:any) {          // Update DB Lambda handler
    
    // Set Constants
    
    const DYNAMO_DB_NAME = env.DYNAMO_DB_NAME                       // Get the name of the DynamoDB Table from the environment variable
    const DYNAMO_DB_KEY = env.DYNAMO_DB_KEY                         // Get the Partition Key of the DynamoDB Table from the environment variable
    const DYNAMO_DB_SORT = env.DYNAMO_DB_SORT                       // Get the Sort Key of the DynamoDB Table from the environment variable

    // Parse the Json in event object to get the requred data

    const Response = event["Records"][0]["Sns"]                      // Set handle on SNS dictionary
    const Message = JSON.parse(Response["Message"])                  // Load the splited "Message" to join it back into a dictionary and set it handle
    const Metric = Message["Trigger"]["MetricName"]                  // Metric on which alarm triggered on
    const Threshold = Message["Trigger"]["Threshold"]                // Threshold for the alarm
    const URL = Message["Trigger"]["Dimensions"][0]["value"]         // URL of the website that triggered the alarm
    
    // Set Item constants
    
    
    const MessageID = Response["MessageId"]                          // Partition Key
    const TimeStamp = Response["Timestamp"]                          // Sort Key
    
    // Set variables
    
    let AlarmName = Message["AlarmName"]                             // Name of the Alarm
    if (AlarmName == null) {                                         // Alarm name was not set
        AlarmName = "No name given"                                  // Set default value
    }
    
    let AlarmDescription = Message["AlarmDescription"]               // Description of the Alarm
    if (AlarmDescription == null) {                                  // Alarm description was not set
        AlarmDescription = "no Description given"                    // Set default value
    }
    
    let AlarmReason = Message["NewStateReason"]                      // Reason why alarm was triggered
    if (AlarmReason == null) {                                       // Alarm reason was not set
        AlarmReason = "no reason given"                              // Set default value
    }
    
    // Create Item from the parsed data

    const Item = {                                                   // Get the Sort Key of the DynamoDB Table from the environment variable
        [DYNAMO_DB_KEY]: { S: MessageID },                           // Partition Key
        [DYNAMO_DB_SORT]: { S: TimeStamp },                          // Sort Key
        "Alarm Name": { S: AlarmName },                              // Name of the Alarm
        "Alarm Description":{ S: AlarmDescription },                 // Description of the Alarm
        "Reason Alarm Triggered": { S: AlarmReason},                 // Reason why alarm was triggered
        "Metric": { S: Metric },                                     // Metric on which alarm triggered on
        "Threshold": { S: Threshold.toString() },                    // Threshold for the alarm
        "URL": { S: URL }                                            // URL of the website that triggered the alarm
    }

    // Insert the created Item into the DynamoDB table

    await DyDB.putItemDB(DYNAMO_DB_NAME, Item)                       // A helper method that inserts an item into a specified table
  };