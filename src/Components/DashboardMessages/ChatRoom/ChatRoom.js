import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import axios from 'axios';

//Styled Components
import { RoomContainer, MessagesContainer, MessageContainerBody, Message, NewMessageContainer, MessageContainerHeader, NewMessageInput } from './ChatRoomStyles';

class ChatRoom extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
            messages: [],
        }
    };

    //Lifecycle Methods
    componentDidMount() {

        // -- Socket Event Listenersn
        this.socket = io();
        //update conversation messages when a new messgae is sent
        this.socket.on('update messages', data => {
            //update local state with the messages
            this.updateMessagesOnState(data);
        });
    };

    componentDidUpdate(previousProps) {
        //take the room id from redux state
        const { roomId } = this.props.conversationReducer;
        //check to see if the roomId on redux state is different than the previous props
        if (roomId !== previousProps.conversationReducer.roomId) {
            //get the conversation message when component updates
            this.getConversationMessages(roomId);
        };

    }

    componentWillUnmount() {
        //disconnect from the socket
        this.socket.disconnect();
    };

    //Socket Methods
    sendSocketMessage = () => {
        //take conversation id off of redux state
        const { roomId } = this.props.conversationReducer;
        //take the user id off of redux state
        const { user_id } = this.props.userReducer.user;
        //store the data in a message obj to send through socket
        const message = {
            roomId,
            user_id,
            body: this.state.input
        };
        //emit an event through the socket to send the message
        this.socket.emit('message sent', message);
        //clear the input on state
        this.setState({
            input: ''
        });
    };

    updateMessagesOnState = (messages) => {
        this.setState({
            messages
        });
    };

    //Local Methods
    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        });
    };

    getConversationMessages = (roomId) => {
        //make an http request to server to get the messages for the conversation
        axios.get(`/conversation/messages/${roomId}`).then(response => {
            //set the local state with the data recieved from the server
            this.setState({
                messages: response.data
            });
        }).catch(error => {
            //if error, catch the message
            console.log(error.message);
        })
    }

    render() {
        //map through the messages on state to return the message as JSX
        const mappedMessages = this.state.messages.map((message, index) => {
            return (
                <Message key={message.message_id}>
                    <h1>{message.body}</h1>
                </Message>
            )
        });


        return (
            <RoomContainer>
                <MessageContainerHeader>

                </MessageContainerHeader>
                <MessagesContainer>
                    <MessageContainerBody>
                        {mappedMessages}
                    </MessageContainerBody>
                </MessagesContainer>
                <NewMessageContainer>
                    <NewMessageInput value={this.state.input} onChange={(event) => this.handleChange('input', event)} />
                    <span><FontAwesomeIcon icon="paper-plane" className="paperplane" onClick={this.sendSocketMessage} /></span>
                </NewMessageContainer>
            </RoomContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps)(ChatRoom)