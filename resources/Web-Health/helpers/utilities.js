// Import Statements

const axios = require('axios');                                                     // Http client library

// Defination Statements

class Utilities {                                                                       // Helper class for Web Health Lambda
    
    async Availability(url) {                                                           // Function to check availbility of given websites
        
        try {                                                                           // Check if there is an error which getting a HTTP Response
            
            const data = await axios.get(url);                                      // Check if a website is available by sending a http request
            if (data.status==200) {                                                     // Check if we get status 200 (OK) as response
                return 1                                                                // Website is available
            } else {
                return 0                                                                // Website is not available
            }
        } catch (error) {                                                               // There is an error checking the availability
            if (axios.isAxiosError(error)) {                                            // If axios have returned error info
                return "Error"                                                          // There is an error
            } else {
                return "Error"                                                          // There is an error
            }
        }
    }
    
    async Latency(url) {                                                                // Function to check latency of given websites
        let startTime = new Date().getTime();                                           // Get the date and time before sending a request
        await axios.get(url);                                                           // Sending a HTTP GET request and getting back response as HTTP response object.
        let endTime = new Date().getTime();                                             // Check time after getting the response
        let deltaTime = (endTime - startTime)                                           // Take time difference
        const latencySeconds = deltaTime / 1000;                                        // Formating latency in seconds
        return latencySeconds                                                           // Returning Latency
    }
}

const utilities = new Utilities();                                                      // Return an instance of helper class

exports.utilities = utilities