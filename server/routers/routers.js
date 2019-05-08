const { AuthRouter } = require('./auth.router');
const { MessageRouter } = require('./messages.router');
const { UsersRouter } = require('./users.router');

//Function to add routes to server
const addRoutes = app => {
    app.use('/auth', AuthRouter);
    app.use('/messages', MessageRouter);
    app.use('/users', UsersRouter);
};

module.exports = {
    addRoutes
};