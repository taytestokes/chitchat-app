require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const MongoClient = require('mongodb').MongoClient;

//Express Setup
const app = express();
app.use(bodyParser.json());

//env file variables
let {
    DATABASE_CONNECTION
} = process.env;


//mongodb connection
const mongodb = new MongoClient(DATABASE_CONNECTION, {useNewUrlParser: true});
mongodb.connect(err => {
    if(err){
        throw err;
    }
    console.log('Mongodb is connected');
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