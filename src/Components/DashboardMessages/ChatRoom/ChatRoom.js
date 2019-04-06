import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import io from 'socket.io-client';

//Styled Components
import { RoomContainer, MessagesContainer, NewMessageContainer, NewMessageInput } from './ChatRoomStyles';

export default class ChatRoom extends Component {
    constructor(){
        super()

        this.state = {
            input: '',
            conversationID: 1
        }
    };

    //Lifecycle Methods
    componentDidMount(){
        //socket connection
        this.socket = io('/');
        this.joinConversation();
    }

    //Methods
    joinConversation = () => {
        //check if the conversation id is available
        if(this.state.conversationID){
            //emit a socket event to connect to the conversation
            this.socket.emit('join conversation', {
                id: this.state.conversationID
            });
        };
    };

    render() {
        return (
            <RoomContainer>
                <MessagesContainer />
                <NewMessageContainer>
                    <NewMessageInput placeholder="Type a message.."/>
                    <span><FontAwesomeIcon icon="paper-plane" className="paperplane"/></span>
                </NewMessageContainer>
            </RoomContainer>
        )
    }
}
