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

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (user, done) {
    done(null, user.id);
});

passport.use('login', new LocalStrategy({
    passReqToCallback: true,
    failureFlash: true
    },
    function (req, username, password, done) {
        //check to make sure there is a username and password
        if (!username || !password) {
            return done(null, false, {message: 'Username and Password are required.'});
        }
        //find user in database
        User.find({ username }).exec(function (err, userResults) {
            //check for err
            if (err) throw err;
            //store user
            const user = userResults[0];
            //store the users password
            const userPassword = user.password;
            //check to see if the stored password is the same as the password
            if (!bcrypt.compareSync(password, userPassword)) {
                return done(JSON.stringify({ message: 'Username or Password is invalid.' }));
            };
            //remove the user password so we don't send it back
            delete user.password;
            //if successful, send the user back to client
            done(null, user);
        });
    }
));

passport.use('register', new LocalStrategy({
    //allow data from the req object to be accessed and routes to redirect to
    passReqToCallback: true,
    successRedirect: `/dashboard/`,
    failureRediect: '/'
},
    function (req, username, password, done) {
        //check to see if there is already a user with that username
        User.find({ username }).exec(function (err, userResults) {
            //check for error
            if (err) throw err;
            //if user already exists, send error message
            if (userResults.length > 0) {
                return done(JSON.stringify({ message: 'Username is not available.' }));
            }
        });
        //hash the new users password
        const hashedPassword = bcrypt.hashSync(password, 15);
        //destruct extra data from req.body
        let { email } = req.body;
        //create the new user following the user model
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            username: username,
            password: hashedPassword,
            email: email
        })
        //add the new user to the database
        newUser.save(function (err) {
            if (err) throw err;
            return done(JSON.stringify({ message: 'User created!' }));
        });
    }
));


//Endpoints
app.post('/test', passport.authenticate('login'), (req, res) => {
    res.send('nice')
});

const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//SOCKET SETUP
const io = socket(server);