require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const massive = require('massive');

//Variables from .ENV
let {
    DATABASE_CONNECTION
} = process.env;

//Express Initial Setup & Configuration
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Massive Configuration
massive(DATABASE_CONNECTION).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected to PostgreSQL DB');
}).catch(err => console.warn(err));

//Sessions Configuration
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "This is my secret for now"
}));

//Passport Configuration For Authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new LocalStrategy(
    function (username, password, done) {
        //check to make sure there is a username and password
        if (!username || !password) {
            return done(null, false, { message: 'Username and Password are required.' });
        };
        //store the db instance in a variable
        const db = app.get('db');
        //find the user in the database
        db.users.find({username}).then(userResults => {
            //if the user is not found, return an error message
            if (userResults.length == 0) {
                return done(null, false, { message: 'User does not exist.' });
            };
            //if user is found, store the user
            const user = userResults[0];
            //store users password
            const storedPassword = user.password;
            //if the stored encrypted password doesn't match the password from the client, return an error message
            if (!bcrypt.compareSync(password, storedPassword)) {
                return done(null, false, { message: 'Invalid username or password.' });
            };
            //if the passwords match, remove the password from the user before sending back the user information
            delete user.password;
            //return the user information
            done(null, user);
        })
    }
));

passport.use('register', new LocalStrategy({
    //allow data from the req object to be accessed and routes to redirect to
    passReqToCallback: true,
},
    function (req, username, password, done) {
        //take the email off of the request body
        const { email } = req.body;
        //store the db instance in a variable
        const db = app.get('db');
        //hash and encrypt the new users password
        const hashedPassword = bcrypt.hashSync(password, 15);
        //check to see if there is already a user with that username
        db.users.find({username}).then(userResults => {
            if (userResults.length > 0) {
                return done(null, false, { message: 'Username is already taken.' })
            }
            //if username is not already in use, create the new user
            return db.users.insert({
                username,
                password: hashedPassword,
                email
            });
        }).then(user => {
            //send user back to client
            done(null, user);
        }).catch(err => {
            console.warn('error');
            done(null, false, {message: 'Unkown error, please try again.'});
        })
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


//Endpoints
app.post('/test', passport.authenticate('login'), (req, res) => {
    res.send('user logged in');
});

const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//SOCKET SETUP
const io = socket(server);