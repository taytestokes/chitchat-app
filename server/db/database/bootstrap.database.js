const massive = require('massive');

//Variables from .ENV
let {
    DATABASE_CONNECTION
} = process.env;

//Massive Configuration
const connectToDB = app => {
    massive(DATABASE_CONNECTION)
        .then(dbInstance => {
            app.set('db', dbInstance);
            console.log('Connected to PostgreSQL DB');
        })
        .catch(err => console.warn(err));
};

//export the connectToDB function
module.exports = {
    connectToDB
};