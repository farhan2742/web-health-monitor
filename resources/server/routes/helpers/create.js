// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        MongoClient         = require('mongodb').MongoClient,                                                                           // MongoDB Client
        ServerApiVersion    = require('mongodb').ServerApiVersion;                                                                      // MongoDB API version
        
// Configure Route

    
const createUrl = async (URL) => {
    const uri = process.env.DB_Url                                                                                                      // URL to connect to DB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });           // MongoDB Client
    let result                                                                                                                          // Variable for output string
    await client.connect()                                                                                                              // Async connect to DB
    .then(                                                                                                                              // After connection have been established
        client =>                                                                                                                       // Pass client to arrow function
                client                                                                                                                  // Connected Client
                    .db("webHealth")                                                                                                    // DB to connect
                    .collection("websites")                                                                                             // Collection in that DB to connect
                    .insertOne(URL)                                                                                                     // Insert the URL in to the collection
    )
    .then(                                                                                                                              // After the URL have been inserted
        urls => {                                                                                                                       // Pass the result to the callback arrow function
            result = urls                                                                                                               // Set the output string as result of the operation
        }
    )
    .finally(() => client.close());                                                                                                     // Close the promise by closing the connection to DB
    return result;
}

module.exports = createUrl;