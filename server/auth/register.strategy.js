const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//Variables from .ENV
let {
    DEFAULT_PIC
} = process.env;

//Strategy
const registerStrategy = new LocalStrategy({
    //allow data from the req object to be accessed and routes to redirect to
    passReqToCallback: true,
},
    function (req, username, password, done) {
        //take the email off of the request body
        const { email } = req.body;
        //store the db instance in a variable
        const db = req.app.get('db');
        //hash and encrypt the new users password
        const hashedPassword = bcrypt.hashSync(password, 15);
        //check to see if there is already a user with that username
        db.users.find({ username }).then(userResults => {
            if (userResults.length > 0) {
                return done(null, false, { message: 'Username is already taken.' });
            }
            //if username is not already in use, create the new user
            return db.users.insert({
                username,
                password: hashedPassword,
                email,
                picture: DEFAULT_PIC
            });
        }).then(user => {
            //remove user password before sending back
            delete user.password;
            //send user back to client
            done(null, user);
        }).catch(err => {
            console.warn(err)
            done(null, false, { message: 'Unkown error, please try again.' });
        });
    }
);

//export strategy
module.exports = {
    registerStrategy
};