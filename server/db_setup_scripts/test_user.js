const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');

mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to Mongodb cluster')
});

const User = require('../models/user.model');

const testpassword = bcrypt.hashSync('testpassword', 15);

const testUser = new User({
    _id: mongoose.Types.ObjectId(),
    username: 'testuser',
    password: testpassword,
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