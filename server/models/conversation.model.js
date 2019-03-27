const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    members: [ user1_id, user2_id ],
    created_at: Date
});

module.exports = mongoose.model('Conversation', conversationSchema);