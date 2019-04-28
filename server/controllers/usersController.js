require('dotenv').config();
const AWS = require('aws-sdk');

const {
    AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY,
    AWS_REGION,
    AWS_BUCKET
} = process.env;

//Setup configuration for AWS
AWS.config.update({
    //secret key for s3 bucket
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    //access key for s32 bucket
    accessKeyId: AWS_ACCESS_KEY,
    //the buckets region
    region: AWS_REGION
});

//create an interface to interact with s3
const S3 = new AWS.S3();

module.exports = {
    getAllUsers: (req, res) => {
        //store db instance
        const db = req.app.get('db');
        //take the current page from query
        const { page } = req.query;
        //define the amount of users to display on a page
        const page_size = 7;
        //get the user id
        const { user_id } = req.user || {};
        //define a count variable set to 0 to capture the dbresponse
        let count = 0;
        //get all users from db that are not the user
        db.users
            .count({ 'user_id !': user_id })
            .then(userCount => {
                //re-assign count to the amount returned from the db
                count = userCount;
                return db.get_users({
                    user_id,
                    page_size,
                    skip: (page - 1) * (page_size),
                });
            })
            .then(users => {
                //send users back to client
                res.send({
                    result: users,
                    currentPage: page,
                    total: count,
                    nextPage: Math.ceil(count / page_size) > page ? +page + 1 : null,
                    previousPage: page > 1 ? page - 1 : null,
                });
            });
    },

    updateUser: (req, res) => {
        //destruct the id from params
        const { id } = req.params;
        //destruct the username and email from the body
        const { username, email } = req.body;
        //get the db instance
        const db = req.app.get('db');
        //check to make sure username is not already taken
        db.users.find({ 'username !': username }).then(() => {
            return db.update_user([username, email, id]);
        }).then(dbResponse => {
            //send a message saying user was updated
            res.status(200).send('User updated!')
        }).catch(err => {
            //if err
            console.warn(err.message);
            //send error message
            res.status(err.code).send(err.message);
        });
    },

    uploadUserPicture: (req, res) => {
        //take the user id from params
        const { id } = req.params;
        //body will contain the string that is the photo
        const { photo } = req.body;
        //get the db instance
        const db = req.app.get('db');
        // the photo string needs to be converted into a 'base 64' string for s3 to understand how to read the image
        const buf = new Buffer.from(photo.file.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        //this is the object to send to S3 with information about the photo, and the the photo itself
        const params = {
            Bucket: AWS_BUCKET,
            Body: buf,
            Key: `user${id}`,
            ContentType: photo.fileType,
            ACL: 'public-read',
        };
        //using the S3 object created above, pass it the image to upload and the function to execute when the image uploads
        S3.upload(params, (err, data) => {
            console.log('hit');
            //declare empty variable to re-assign based on error
            let response, code;
            //check to see if err, and handle the data
            if (err) {
                console.warn(err)
                response = err;
                code = 500;
            } else {
                response = data;
                code = 200;
            }
            //if upload was successful, update the users pic in the db
            db.update_user_picture([response.Location, id]).then(dbResponse => {
                res.status(200).send('Profile picture updated!');
            }).catch(err => {
                console.log(err.message);
            })
        })
    }
};