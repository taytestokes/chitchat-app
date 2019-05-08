const { AuthRouter } = require('./auth.router');
const { MessageRouter } = require('./messages.router');

//Function to add routes to server
const addRoutes = app => {
    app.use('/auth', AuthRouter);
    app.use('/messages', MessageRouter);
};

module.exports = {
    addRoutes
};