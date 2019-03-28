const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    content: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    conversationId: {
        type: Schema.ObjectId,
        ref: 'Conversation'
    }
});

module.exports = mongoose.model('Message', messageSchema);