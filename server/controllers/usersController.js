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
    }
};