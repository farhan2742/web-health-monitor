// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        readUrl             = require('./helpers/read'),                                                                                // Helper Function
        passport            = require('passport'),
        router              = express.Router({mergeParams: true});                                                                      // Express Router

// Configure Route
// 
        
router.get('/fetch', async function (req, res) {                                                                                        // Route path
    let result = await readUrl()                                                                                                        // Variable for output string
    res.send(result)                                                                                                                    // Send the output string as response of the route
});

module.exports = router;                                                                                                                // Export Route