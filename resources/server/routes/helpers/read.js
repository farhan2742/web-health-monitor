// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        MongoClient         = require('mongodb').MongoClient,                                                                           // MongoDB Client
        ServerApiVersion    = require('mongodb').ServerApiVersion;                                                                      // MongoDB API version
        
// Configure Route

    
const readUrl = async () => {
    const uri = process.env.DB_Url                                                                                                      // URL to connect to DB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });           // MongoDB Client
    let result                                                                                                                          // Variable for output string
    await client.connect()                                                                                                              // Async connect to DB
    .then(                                                                                                                              // After connection have been established
        client =>                                                                                                                       // Pass client to arrow function
                client                                                                                                                  // Connected Client
                    .db("webHealth")                                                                                                    // DB to connect
                    .collection("websites")                                                                                             // Collection in that DB to connect
                    .find({})                                                                                                           // Find all the URLs
                    .toArray()                                                                                                          // Convert them into an array
    )
    .then(                                                                                                                              // After the URLs have been fetched
        urls =>                                                                                                                         // Pass the result to the callback arrow function
            result = urls                                                                                                               // Set the output string as result of the operation
    )
    .finally(() => client.close());                                                                                                     // Close the promise by closing the connection to DB
    return result;
}

module.exports = readUrl;