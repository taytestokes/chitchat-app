const { AuthRouter } = require('./auth.router');

//Function to add routes to server
const addRoutes = app => {
    app.use('/auth', AuthRouter);
};

module.exports = {
    addRoutes
};