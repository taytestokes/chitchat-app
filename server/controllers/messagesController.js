module.exports = {
    getUserConversations: (req, res) => {
        //take the users id from the params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        //find all of the users conversations
        db.get_conversations([id]).then(userInfo => {
            console.log(userInfo);
            res.send(userInfo);
        }).catch(error => {
            console.warn(error);
        });
    },

    createConversation: (req, res) => {
        //store the users from the request
        const { newUser, user } = req.body;
        //get the db instance
        const db = req.app.get('db');
        //create a new conversation
        db.create_conversation([user.user_id, newUser.user_id]).then(dbResponse => {
            console.log(dbResponse)
            res.send(`Conversation with ${newUser.username} & ${user.username} was created!`)
        }).catch(error => {
            res.send(error.message);
        })
    },
}