const passport = require('passport');

//Strategies
const { loginStrategy } = require('./login.strategy');
const { registerStrategy } = require('./register.strategy');

//Passport conffguration
passport.use('login', loginStrategy);
passport.use('register', registerStrategy);

//Serialize and Deserialize user
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});