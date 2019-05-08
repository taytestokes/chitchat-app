const express = require('express');
const passport = require('passport');

//Auth Controller
const authController = require('../controllers/authController');

//Auth Router
const AuthRouter = express.Router();

//Routes
AuthRouter.get('/logout', authController.logout);
AuthRouter.post('/login', passport.authenticate('login'), authController.login);
AuthRouter.post('/register', passport.authenticate('register'), authController.register);

//Export Router
module.exports = {
    AuthRouter
};