const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io');

//Express Setup
const app = express();
app.use(bodyParser.json());


const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

//Socket Setup
const io = socket(server);

//this function fires when the client connects to the server socket
io.on('connection', (socket) => {
    console.log('socket connected')
})