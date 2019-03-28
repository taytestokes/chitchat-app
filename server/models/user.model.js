const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: false
    },
    // friends: [user1_id, user2_id, user3_id]
});

module.exports = mongoose.model('User', userSchema);