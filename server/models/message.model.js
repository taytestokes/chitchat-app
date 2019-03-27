const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author: {
        type: Schema.ObjectId,
        ref: User
    },
    content: String,
    created_at: Date,
    conversationId: {
        type: Schema.ObjectId,
        ref: Conversation
    }
});

module.exports = mongoose.model('Message', messageSchema);