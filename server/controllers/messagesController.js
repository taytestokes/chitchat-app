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

    createConversation: (req, res) => {
        //store the users from the request
        const { newUser, user } = req.body;
        //get the db instance
        const db = req.app.get('db');
        //create a new conversation
        db.create_conversation([user.user_id, newUser.user_id]).then(dbResponse => {
            //send back a message and the new room id
            res.status(200).send({
                roomId: dbResponse[0].id,
                message: 'New conversation created!'
            })
        }).catch(error => {
            res.send(error.message);
        })
    },

    getConversationMessages: (req, res) => {
        //take the conversation id from params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        //get the conversation meessages based of the room id
        db.get_conversation_messages([id]).then(dbResponse => {
            //send the db response to the client
            res.status(200).send(dbResponse);
        }).catch(error => {
            console.log(error.message);
        });
    },

    getConversationUsers: (req, res) => {
        //destructure the conversation id from params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        db.get_conversation_users([id]).then(dbResponse => {
            //send the response from the db
            res.status(200).send(dbResponse);
        }).catch(err => {
            //if err
            console.warn(err.message);
        })
    },

    getConversationInfo: (req, res) => {
        //take the id from params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        //query the db for the room information
        db.get_conversation_info([id]).then(dbResponse => {
            //send the response from db to client
            res.status(200).send(dbResponse[0]);
        }).catch(err => {
            //if err, log the err & send
            console.warn(err.message);
            res.status(500).send(err.message);
        })
    },

    getConversationTabInfo: (req, res) => {
        //take the id from params
        const { id } = req.params;
        //get the db instance
        const db = req.app.get('db');
        //query db for the information
        db.get_conversation_tab_info([id]).then(dbResponse => {
            //send the data if success
            res.status(200).send(dbResponse[0]);
        }).catch(err => {
            //log err
            console.warn(err.message)
            //send the err message
            res.status(500).send(err.message);
        })
    }
}