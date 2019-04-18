module.exports = {
    getAllUsers: (req, res) => {
        //store db instance
        const db = req.app.get('db');
        //take the current page from query
        const { page } = req.query;
        //define the amount of users to display on a page
        const page_size = 8;
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
};