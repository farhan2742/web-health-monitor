// Set dependancies

const dotenv                = require('dotenv'),                                        // For environment variables
      express               = require('express'),                                       // Express Framework
      bodyParser            = require('body-parser'),                                   // Middleware for handling xml and json
      cors                  = require('cors'),                                          // For cross orign resourse sharing
      path                  = require('path'),                                          // For setting path
      methodOverride        = require('method-override'),                               // Lets you use HTTP verbs such as PUT when client doesn't support it.
      createRoute           = require("./routes/create"),                               // Route to create new URL in DB
      readRoute             = require("./routes/read"),                                 // Route to download all URLs in DB
      updateRoute           = require("./routes/update"),                               // Route to update a URL in DB
      deleteRoute           = require("./routes/delete"),                               // Route to delete a URL in DB
      subUrlsRoute          = require("./routes/subUrls"),                              // Route to delete a URL in DB
      statsRoute            = require("./routes/stats"),                                // Route to delete a URL in DB
      usersRoute            = require("./routes/users"),                                // Route to delete a URL in DB
      passport              = require('passport'),                                      // For Auth
      mongoose              = require("mongoose");                                      // For MongoDB
      
// config dependancies

dotenv.config();                                                                        // dot ENV
const app = express();                                                                  // Express
app.use(methodOverride('_method'))                                                      // Method Override
app.use(bodyParser.urlencoded({ extended: false }));                                    // Body Parser URL encoding
app.use(bodyParser.json());                                                             // Body Parser JSON
app.use(cors({ origin: "*" }));                                                         // CORS

// DB Config
const dbuser = process.env.DB_USERNAME
const dbpass = process.env.DB_PASSWORD
const dbname = process.env.DB_NAME
const dburl = `mongodb+srv://${dbuser}:${dbpass}@cluster0.tkvye.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose
    .connect(process.env.DB_Url)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware

app.use(passport.initialize());

// Passport Config

require('./config/passport')(passport);


// Designate routes

app.use("/url",createRoute);                                                            // Route to create new URL in DB
app.use("/url",readRoute);                                                              // Route to download all URLs in DB
app.use("/url",updateRoute);                                                            // Route to update a URL in DB
app.use("/url",deleteRoute);                                                            // Route to delete a URL in DB
app.use("/url",subUrlsRoute);                                                           // Route to delete a URL in DB
app.use("/url",statsRoute);                                                             // Route to delete a URL in DB
app.use('/users', usersRoute);

module.exports = app                                                                    // Export serevr