module.exports = {
    getAllUsers: (req, res) => {
        //store db instance
        const db = req.app.get('db');
        //get the user id
        const {user_id} = req.user;
        //get all users from db that are not the user
        db.get_users([user_id]).then(users => {
            //send users back to client
            res.send(users);
        });
    }
};