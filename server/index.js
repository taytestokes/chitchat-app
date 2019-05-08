require('dotenv').config();
require('./auth/passport.auth');
const express = require('express');
const socket = require('socket.io');
const passport = require('passport');
const { provider } = require('./middleware/provider');
const { connectToDB } = require('./db/database/bootstrap.database');
const { addRoutes } = require('./routers/routers');
const AWS = require('aws-sdk');

//Controllers

const usersController = require('./controllers/usersController');

//Express Initial Setup & Configuration
const app = express();

//Middleware
provider(app);

//Database Setup
connectToDB(app);

//Routes
addRoutes(app);

//Dashboard Users Endpoints
app.get('/users', usersController.getAllUsers);
app.post('/update/user/:id', usersController.updateUser);
app.post('/user/picture/:id', usersController.uploadUserPicture);

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
        console.log(roomId);
        //get the current time stamp of the message
        const date = new Date();
        let hours = date.getHours();
        //check to see if it is a single value
        if (parseInt(hours) < 10) {
            hours = '0' + hours;
        };
        let minutes = date.getMinutes();
        //check to see if it is a single value
        if (parseInt(minutes) < 10) {
            minutes = '0' + minutes;
        };
        //create the new time stamp
        const timestamp = `${hours}:${minutes}`;
        //store the db instance
        const db = app.get('db');
        //create a new message for the db
        db.create_new_message([roomId, user_id, body, timestamp]).then(() => {
            console.log('New message created!');
        }).then(() => {
            //query the data base and return the messages related to the conversation
            db.get_conversation_messages([roomId]).then(dbResponse => {
                //emit the dbResponse to the conversation
                io.emit('update messages', dbResponse);
            });
        }).catch(error => {
            console.log(error.message);
        });
    });

    //show a user is typing
    socket.on('typing', roomId => {
        //emit a message that the user is typing
        socket.broadcast.emit('user typing', roomId);
    })

    //disconnect the user
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});