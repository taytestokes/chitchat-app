const express = require('express');

//Messages Controller
const messagesController = require('../controllers/messagesController');

//Router
const MessageRouter = express.Router();

//Routes
MessageRouter.get('/user/conversations/:id', messagesController.getUserConversations);
MessageRouter.get('/conversation/messages/:id', messagesController.getConversationMessages);
MessageRouter.get('/conversation/info/:id', messagesController.getConversationInfo);
MessageRouter.get('/conversation/information/:id', messagesController.getConversationTabInfo);
MessageRouter.get('/conversation/users/:id', messagesController.getConversationUsers);
MessageRouter.put('/conversation/:id', messagesController.updateConversationName);
MessageRouter.post('/new/conversation', messagesController.createConversation);

//Export Router
module.exports = {
    MessageRouter
};