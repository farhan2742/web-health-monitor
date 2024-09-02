// Set dependancies

const app           = require('./app'),                                         // For environment variables
      express       = require('express');                                       // Express Framework
      

// designates what port the app will listen to for incoming requests

let port = process.env.PORT                                                             // Set Port
app.listen(process.env.PORT, function () {                                              // Set server to listen to that port
    console.log(`Example app listening on port ${port}`)                                // Console log port no
});

module.exports = app                                                                    // Export serevr