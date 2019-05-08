const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//Strategy
const loginStrategy = new LocalStrategy({
    passReqToCallback: true
},
    function (req, username, password, done) {
        //store the db instance in a variable
        const db = req.app.get('db');
        //check to make sure username and password exist
        if (username.length === 0 || password.length === 0) {
            return done(null, false, { message: 'Username and Password are required.' })
        }
        //find the user in the database
        db.users.find({ username }).then(userResults => {
            //if the user is not found, return an error message
            if (userResults.length == 0) {
                return done(null, false, { message: 'User does not exist.' })
            };
            //if user is found, store the user
            const user = userResults[0];
            //store users password
            const storedPassword = user.password;
            //if the stored encrypted password doesn't match the password from the client, return an error message
            if (!bcrypt.compareSync(password, storedPassword)) {
                return done(null, false, { message: 'Invalid username or password.' });
            };
            //if the passwords match, remove the password from the user before sending back the user information
            delete user.password;
            //return the user information
            return done(null, user);
        })
        .catch(error => {
            console.warn(error);
        });
    }
);

//export strategy
module.exports = {
    loginStrategy
};