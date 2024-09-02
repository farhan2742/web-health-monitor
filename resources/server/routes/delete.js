// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        CW                  = require('./helpers/helperCloudwatch').helperCloudwatch,                   // MongoDB API version
        deleteUrl           = require('./helpers/delete'),                                                                              // Helper Function
        passport            = require('passport'),
        router              = express.Router({mergeParams: true});                                                                      // Express Router

// Configure Route
        
router.delete('/delete', passport.authenticate('jwt', { session: false }), async function (req, res) {                                                                                    // Route path
    let myQuery = {                                                                                                                     // Qurey for Client
        "url" : req.body.url                                                                                                            // Fetch URL from req.body
    }
    let result = await deleteUrl(myQuery);                                                                                              // Variable for output string
    const alarmToDelete1 = 'Farhan_Availability_'+req.body.url
    const alarmToDelete2 = 'Farhan_Latency_'+req.body.url
    await CW.deleteAlarmCW([alarmToDelete1,alarmToDelete2]);
    res.send(result)                                                                                                                    // Send the output string as response of the route
});
    
module.exports = router;                                                                                                                // Export Route