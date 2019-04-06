module.exports = {
    getUserConversations: (req, res) => {
        //take the users id from the params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        //find all of the users conversations
        db.get_conversations([id]).then(userInfo => {
            res.send(userInfo);
        }).catch(error => {
            console.warn(error);
        });
    },
}