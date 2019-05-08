const express = require('express');

//Users Controller
const usersController = require('../controllers/usersController');

//Users Router
const UsersRouter = express.Router();

//Routes
UsersRouter.get('/users', usersController.getAllUsers);
UsersRouter.post('/update/user/:id', usersController.updateUser);
UsersRouter.post('/user/picture/:id', usersController.uploadUserPicture);

//Export Router
module.exports = {
    UsersRouter
};