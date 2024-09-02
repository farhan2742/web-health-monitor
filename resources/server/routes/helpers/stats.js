// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        CW                  = require('./helperCloudwatch').helperCloudwatch,                   // MongoDB API version
        MongoClient         = require('mongodb').MongoClient,                                                                           // MongoDB Client
        ServerApiVersion    = require('mongodb').ServerApiVersion;                                                                      // MongoDB API version
        
// Configure Route

const urlStats = async (URL) => {                                               // Function to fetch URL
    let Avail = await CW.getMetricDataCW('Availability','Voyager_Farhan',URL)
    let Lat = await CW.getMetricDataCW('Latency','Voyager_Farhan',URL)
    let result = [Avail.Datapoints,Lat.Datapoints]
    return result;                                                                  // Return Result array
}

module.exports = urlStats;                                                      // Export fetchSubUrls