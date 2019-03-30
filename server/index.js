require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

//Mongoose Models
const User = require('./models/user.model');
const Conversation = require('./models/conversation.model');
const Message = require('./models/message.model');

//Variables from .ENV
let {
    DATABASE_CONNECTION
} = process.env;

//Express Initial Setup & Configuration
const app = express();
app.use(bodyParser.json());
app.use(cors());

//DB Connection Configuration
mongoose.connect(DATABASE_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to Mongodb cluster')
});

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
    function(username, password, done){
        //check to make sure there is a username and password
        if(!username || !password){
            return done(JSON.stringify({message: 'Username and Password are required.'}));
        }
        //find user in database
        User.find({username}).exec(function(err, userResults){
            //check for err
            if(err) throw err;
            //store user
            const user = userResults[0];
            //store the users password
            const userPassword = user.password;
            //check to see if the stored password is the same as the password
            if(!bcrypt.compareSync(password, userPassword)){
                return done(JSON.stringify({message: 'Username or Password is invalid.'}));
            };
            //remove the user password so we don't send it back
            delete user.password;
            //if successful, send the user back to client
            done(null, user);
        });
    }
));

passport.use('register', new LocalStrategy({
    //allow data from the req object to be accessed
    passReqToCallback: true
    }, function(req, username, password, done){
        //check to see if there is already a user with that username
        User.find({username}).exec(function(err, userResults){
            //check for error
            if(err) throw err;
            //if user already exists, send error message
            if(userResults.length > 0){
                return done(JSON.stringify({message: 'Username is not available.'}));
            }
        });
        //hash the new users password
        const hashedPassword = bcrypt.hashSync(password, 15);
        //destruct extra data from req.body
        let {email} = req.body;
        //create the new user following the user model
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            username: username,
            password: hashedPassword,
            email: email
        })
        //add the new user to the database
        newUser.save(function(err){
            if(err) throw err;
            return done(JSON.stringify({message: 'User created!'}));
        });
    }
));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(user, done){
    done(null, user.id);
});

//Endpoints
app.post('/test', passport.authenticate('register'), (req, res) => {
    console.log('user created');
});

const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//SOCKET SETUP
const io = socket(server);



//this function fires when the client connects to the server socket
io.on('connection', (socket) => {
    console.log('socket connected on:', socket.handshake.time)
    socket.emit('welcome', { userID: socket.id });

    //listens for a new message then emits it to the other sockets
    socket.on('new message', (data) => {
        data.user = this.id;
        io.emit('message dispatched', data)
    })
})