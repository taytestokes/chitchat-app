import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import io from 'socket.io-client';

//Styled Components
import { RoomContainer, MessagesContainer, NewMessageContainer, MessageContainerHeader, NewMessageInput } from './ChatRoomStyles';

export default class ChatRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            messages: [],
            conversationID: props.conversationID,
        }
    };

    //Lifecycle Methods
    componentDidMount() {
        //take the converations id off of props
        const { conversationID } = this.props;
        //set the conversation id based off the id in the url
        this.setState({
            conversationID
        });
        //socket connection
        this.socket = io('/');
        this.joinConversation();
    }

    //Methods
    joinConversation = () => {
        //check if the conversation id is available
        if (this.state.conversationID) {
            //emit a socket event to connect to the conversation
            this.socket.emit('join conversation', {
                id: this.state.conversationID
            });
        };
    };

    //LEAVING OFF HERE
        //-- put the conversation id on props instead?

    render() {
        console.log(this.state);
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
