require('dotenv').config();
require('./auth/passport.auth');
const express = require('express');
const { provider } = require('./middleware/provider');
const { connectToDB } = require('./db/database/bootstrap.database');
const { addRoutes } = require('./routers/routers');
const { socketConnection } = require('./sockets/setup.socket');

//Express Setup
const app = express();

//Middleware
provider(app);

//Database Setup
connectToDB(app);

//Routes
addRoutes(app);

//Server Setup
const server = app.listen(4000, () => {
    console.log(`⚙️  Server is running on port ${server.address().port} ⚙️ `);
});

//Sockets
socketConnection(server, app);