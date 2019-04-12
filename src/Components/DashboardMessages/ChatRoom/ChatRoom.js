import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import io from 'socket.io-client';

//Styled Components
import { RoomContainer, MessagesContainer, NewMessageContainer, MessageContainerHeader, NewMessageInput } from './ChatRoomStyles';

class ChatRoom extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
            messages: [],
        }
    };

    render() {
        console.log(this.props.conversationReducer);
        return (
            <RoomContainer>
                <MessagesContainer>
                    <MessageContainerHeader>

                    </MessageContainerHeader>
                </MessagesContainer>
                <NewMessageContainer>
                    <NewMessageInput placeholder="Type a message.." />
                    <span><FontAwesomeIcon icon="paper-plane" className="paperplane" /></span>
                </NewMessageContainer>
            </RoomContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps)(ChatRoom)