// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        CW                  = require('./helpers/helperCloudwatch').helperCloudwatch,                   // MongoDB API version
        updateUrl           = require('./helpers/update'),                                                                              // Helper Function
        passport            = require('passport'),
        router              = express.Router({mergeParams: true});                                                                      // Express Router

// Configure Route

router.put('/update', passport.authenticate('jwt', { session: false }), async function (req, res) {                                                                                       // Route path
    let newUrl = {                                                                                                                      // Qurey for Client
        $set: {                                                                                                                         // Set new URL
            "url": req.body.newUrl                                                                                                      // Fetch New URL from req.body
        } 
    };
    let oldUrl = {                                                                                                                      // Qurey for Client
        "url" : req.body.oldUrl                                                                                                         // Fetch Old URL from req.body
    }
    let result = await updateUrl(oldUrl,newUrl)                                                                                         // Variable for result string
    const alarmToDelete1 = 'Farhan_Availability_'+req.body.oldUrl
    const alarmToDelete2 = 'Farhan_Latency_'+req.body.oldUrl
    await CW.deleteAlarmCW([alarmToDelete1,alarmToDelete2]);
    res.send(result)                                                                                                                    // Send the output string as response of the route
});
    
module.exports = router;                                                                                                                // Export Route