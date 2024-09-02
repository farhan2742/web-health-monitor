// Set dependancies

const   express             = require('express'),                                   // Express Framework
        bodyParser          = require('body-parser'),                               // Middleware for handling xml and json
        axios               = require('axios'),                                     // For fetching URLs
        cheerio             = require('cheerio');                                   // For parsing html
        
// Configure Route

const fetchSubUrls = async (URL) => {                                               // Function to fetch URL
    let result = [];                                                                // Result variable
    await fetchData(URL).then( (res) => {                                           // Fetch URL
        const html = res.data;                                                      // Get HTML
        const $ = cheerio.load(html);                                               // Select HTML
        const listItems = $("a");                                                   // Select Hyperlinks
        let length = 0;                                                             // Length of the loop
        if (listItems.length > 10) {                                                // If no of Hyperlinks is greater then 10
            length = 10;                                                            // Set length to 10
        } else {                                                                    // Else 
            length = listItems.length;                                              // Set length to no of hyperlinks
        }
        for(let i=0; i<length; i++){                                                // Loop Through Hyperlinks
            let subURL = $(listItems[i]).attr('href')                               // Select anchors with href attribute
            let subUrlCheck1 = subURL.split('http://');                             // Check if link has http://
            let subUrlCheck2 = subURL.split('https://');                            // Check if link has https://
            let splitSUB = subURL.split('');                                        // Check if link starts with /
            if (subUrlCheck1[0] !== '' && subUrlCheck2[0] !== ''){                  // If link does not have http and https
                if (splitSUB[0] != '/') {                                           // If link does not start with /
                    subURL = URL + "/" + subURL;                                    // Append base url and / to sub url
                }
                else {                                                              // Link starts with /
                    subURL = URL + subURL;                                          // Appent base url to sub url
                }
            }
            result.push({'name': subURL})                                           // Add sub url to result array
        }
    })
    return result;                                                                  // Return Result array
}


async function fetchData(url){
    let response = await axios(url).catch((err) => console.log(err));               // Make http call to url
    if(response.status !== 200){                                                    // If response status is not 200
        console.log("Error occurred while fetching data");                          // Console log error
        return;                                                                     // Return empty
    }
    return response;                                                                // Status is 200 so return response
}

module.exports = fetchSubUrls;                                                      // Export fetchSubUrls