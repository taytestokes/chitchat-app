import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styled Components
import { RoomContainer, MessagesContainer, NewMessageContainer, NewMessageInput } from './ChatRoomStyles';

export default class ChatRoom extends Component {
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
