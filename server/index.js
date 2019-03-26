require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const massive = require('massive');

//Express Setup
const app = express();
app.use(bodyParser.json());

//env file variables
let {
    DATABASE_CONNECTION
} = process.env;

//database connection using massive
massive(DATABASE_CONNECTION).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('database connected');
}).catch(err => {
    console.log(DATABASE_CONNECTION)
    console.log('database connection failed', err);
})


const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//SOCKET SETUP
const io = socket(server);

//this function fires when the client connects to the server socket
io.on('connection', (socket) => {
    console.log('socket connected on:', socket.handshake.time)
    socket.emit('welcome', {userID: socket.id});

    //listens for a new message then emits it to the other sockets
    socket.on('new message', (data) => {
        data.user = this.id;
        io.emit('message dispatched', data)
    })
})