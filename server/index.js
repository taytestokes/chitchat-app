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
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

//Controllers
const authController = require('./controllers/authController');
const messagesController = require('./controllers/messagesController');
const usersController = require('./controllers/usersController');

//Variables from .ENV
let {
    DATABASE_CONNECTION,
    AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY
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
    saveUninitialized: true,
    resave: true,
    secret: "This is my secret for now"
}));

//Amazon & Multer Configuration
aws.config.update({
    //secret key for s3 bucket
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    //access key for s32 bucket
    accessKeyId: AWS_ACCESS_KEY,
    //the buckets region
    region: 'us-west-2'
});

//amazon s3 bucket instance
const s3 = new aws.S3();

const upload = multer({
    //configure where to store the images, in this case an s3 bucket
    storage: multerS3({
        s3: s3,
        bucket: 'chitchat-app',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, req.user.username);
        }
    })
});

const singleUpload = upload.single('image');

//Passport Configuration For Authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use('login', new LocalStrategy(
    function (username, password, done) {
        //store the db instance in a variable
        const db = app.get('db');
        //check to make sure username and password exist
        if (username.length === 0 || password.length === 0) {
            return done(null, false, { message: 'Username and Password are required.' })
        }
        //find the user in the database
        db.users.find({ username }).then(userResults => {
            //if the user is not found, return an error message
            if (userResults.length == 0) {
                return done(null, false, { message: 'User does not exist.' })
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
            return done(null, user);
        });
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
        db.users.find({ username }).then(userResults => {
            if (userResults.length > 0) {
                return done(null, false, { message: 'Username is already taken.' });
            }
            //if username is not already in use, create the new user
            return db.users.insert({
                username,
                password: hashedPassword,
                email,
            });
        }).then(user => {
            //remove user password before sending back
            delete user.password;
            //send user back to client
            done(null, user);
        }).catch(err => {
            console.warn(err);
            done(null, false, { message: 'Unkown error, please try again.' });
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});

//Auth Endpoints
app.post('/auth/login', passport.authenticate('login'), authController.login);
app.post('/auth/register', passport.authenticate('register'), authController.register);
app.get('/auth/logout', authController.logout);

//Dashboard Messages Endpoints
app.get('/user/conversations/:id', messagesController.getUserConversations);
app.post('/new/conversation', messagesController.createConversation);
app.get('/conversation/messages/:id', messagesController.getConversationMessages); 

//Dashboard Users Endpoints
app.get('/users', usersController.getAllUsers);


//Server Setup
const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//Socket.io Setup
const io = socket(server);

//Socket.io Endpoints
io.on('connection', socket => {
    console.log('Connected to Socket.io');

    //join the socket room based off of the conversation
    socket.on('join room', data => {
        console.log('joined room:', data.roomId);
        socket.join(data.roomId);
    });

    //send a new message to this room
    socket.on('message sent', data => {
        //destruct the information of the message from the data obj
        const { roomId, user_id, body } = data;
        //get the current time stamp of the message
        const date = new Date().toUTCString();
        //store the db instance
        const db = app.get('db');
        //create a new message for the db
        db.create_new_message([roomId, user_id, body, date]).then(() => {
            console.log('New message created!');
        }).then(() => {
            //query the data base and return the messages related to the conversation
            db.get_conversation_messages([roomId]).then(dbResponse => {
                console.log(dbResponse);
                //emit the dbResponse to the conversation
                io.emit('update messages', dbResponse);
            });
        }).catch(error => {
            console.log(error.message);
        });

    });

    //disconnect the user
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});