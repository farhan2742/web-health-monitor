// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        createUrl           = require('./helpers/create'),                                                                              // Helper Function
        passport            = require('passport'),
        router              = express.Router({mergeParams: true});                                                                      // Express Router
        
// Configure Route
        
router.post('/add', passport.authenticate('jwt', { session: false }), async function (req, res) {                                                                                         // Route path
    let myQuery = {                                                                                                                     // Qurey for Client
        "url" : req.body.url                                                                                                            // Fetch URL from req.body
    }                                                                           
    let result = await createUrl(myQuery);                                                                                              // Variable for output string                                                                                                   // Close the promise by closing the connection to DB
    res.send(result)                                                                                                                    // Send the output string as response of the route
});

module.exports = router;                                                                                                                // Export Route