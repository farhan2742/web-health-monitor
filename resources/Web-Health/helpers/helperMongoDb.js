// Import Statements

    const   { env }             = require('process'),                                   // Environment Variables
            axios               = require('axios');                                     // Http client library

// Defination Statements

class HelperMongoDB {                                                                   // Helper class for Web Health Lambda
    api = axios.create({                                                                // Create API
        baseURL: 'https://391srz952e.execute-api.us-west-1.amazonaws.com'               // baseURL for API calls
    })
    
    async fetchUrls() {
        try {                                                                           // Try to fetch data from DB
          let res = await this.api.get('/prod/url/fetch')                               // Fetch Data from DB
          return res.data                                                               // Return Data
        }
        catch(err){                                                                     // If Error Fetching Data
          console.log(err)                                                              // Log error
        }
    }

}

const helperMongoDB = new HelperMongoDB();                                                                                           // Return an instance of helper class

exports.helperMongoDB = helperMongoDB