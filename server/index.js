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

//Passport Configuration
app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new LocalStrategy(
    function(username, password, done){
        //check to make sure there is a username and password
        if(!username || !password){
            return done({message: 'Username and Password are required.'});
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
                return done({message: 'Username or Password are invalid.'});
            };
            //remove the user password so we don't send it back
            delete user.password;
            //if successful, send the user back to client
            done(null, user);
        });
    }
));

app.post('/test', passport.authenticate('login'), (req, res) => {
    console.log(req.body);
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