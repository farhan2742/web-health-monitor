// Import Statements

import axios from 'axios';                                                          // For Fetching Data from DB
import setAuthToken from './setAuthToken';

// Definition Statements

class CRUD {                                                                        // Helper Class with crud methods

  api = axios.create({                                                              // Create API
    baseURL: 'https://gukxykjxf3.execute-api.us-west-1.amazonaws.com/prod'               // baseURL for API calls
  })

  async getURL() {                                                                  // Helper method to fetch URLs
    try {                                                                           // Try to fetch data from DB
      let res = await this.api.get('/url/fetch')                               // Fetch Data from DB
      return res.data                                                               // Return Data
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

  async fetchSubUrls(URL) {                                                         // Helper method to fetch Sub-URLs
    try {                                                                           // Try to fetch data from DB
      console.log(localStorage['jwtToken'])
      let res = await this.api.post('/url/subUrls',                            // Fetch Data from DB
        { url: URL},                                                                // Set Request Body
        {
          headers: {                                                                // Set Request Headers
          'Authorization': localStorage['jwtToken'],
          'Content-Type': 'application/json'                                        // Set Content Type Header
          }
        }
      );
      return {'name': URL, 'children' : res.data}                                   // Return Data after Formating
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

  async fetchStats(URL) {                                                         // Helper method to fetch Sub-URLs
    try {                                                                           // Try to fetch data from DB
      let res = await this.api.post('/url/stats',                            // Fetch Data from DB
        { url: URL},                                                                // Set Request Body
        {
          headers: {                                                                // Set Request Headers
            'Authorization': localStorage['jwtToken'],
            'Content-Type': 'application/json'                                        // Set Content Type Header
          }
        }
      );
      return res.data                                   // Return Data after Formating
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

  async createURL(url) {                                                            // Helper method to add new URL to DB
    try{                                                                            // Try to post data in DB
      await this.api.post('/url/add',                                          // Add new URL to DB
        { url: url },                                                               // Set Request Body
        {
          headers: {                                                                // Set Request Headers
            'Authorization': localStorage['jwtToken'],
            'Content-Type': 'application/json'                                      // Set Content Type Header
          }
        }
      );  
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

  async updateURLS(Old, New) {                                                      // Helper method to update a URL in DB
    try {                                                                           // Try to update data in DB
      await this.api.put('/url/update',                                        // Update URL in DB
        {                                                                           // Set Request Body
          oldUrl: Old,                                                              // Set OldURL
          newUrl: New                                                               // Set NewURL
        },
        {
          headers: {                                                                // Set Request Headers
            'Authorization': localStorage['jwtToken'],
            'Content-Type': 'application/json'                                        // Set Content Type Header
          }
        }
      );
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

  async deleteURLS(url) {                                                           // Helper method to delete a URL from DB
    try{                                                                            // Try to delete data from DB
      await this.api.delete('/url/delete',                                     // Delete Data from DB
        {
          headers: {                                                                // Set Request Headers
            'Authorization': localStorage['jwtToken'],
            'Content-Type': 'application/json'                                      // Set Content Type Header
          },
          data: { url: url }                                                        // Set Request Body
        }
      );
    }
    catch(err){                                                                     // If Error Fetching Data
      console.log(err)                                                              // Log error
    }
  }

}

const crud = new CRUD();                                                            // Create crud Object from CRUD Class
export default crud                                                                 // Export crud Object