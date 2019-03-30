const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to Mongodb cluster')
});

const User = require('../models/user.model');

const testUser = new User({
    _id: mongoose.Types.ObjectId(),
    username: 'testuser',
    password: 'testpassword',
    email: 'testuser@email.com',
    title: 'user'
});

testUser.save(function(err){
    if(err){
        throw err;
    }else{
        console.log('test user created')
    }
});