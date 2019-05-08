const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const sessions = require('express-session');


//provider function to serve the middleware to the server
const provider = app => {
    //since file upload is such a large string, body-parser is not equipped to handle it
    //this will allow uploads through the body
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(cookieParser());
    app.use(cors());
    //Passport Configuration For Authentication
    app.use(passport.initialize());
    app.use(passport.session());
    //Sessions Configuration
    app.use(sessions({
        saveUninitialized: true,
        resave: true,
        secret: "This is my secret for now"
    }));
};

//export th eprovider function
module.exports = {
    provider
};