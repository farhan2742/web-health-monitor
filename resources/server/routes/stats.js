// Set dependancies

const   express             = require('express'),                                                                                       // Express Framework
        bodyParser          = require('body-parser'),                                                                                   // Middleware for handling xml and json
        urlStats            = require('./helpers/stats'),                                                                              // Helper Function
        passport            = require('passport'),
        router              = express.Router({mergeParams: true});                                                                      // Express Router
        
// Configure Route
        
router.post('/stats', passport.authenticate('jwt', { session: false }), async function (req, res) {                                                                                         // Route path
    let result = await urlStats(req.body.url)                                    // Fetch stats
    res.send(result)                                                                                                                   // Send the output string as response of the route
});

module.exports = router;                                                                                                                // Export Route