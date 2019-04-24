import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import axios from 'axios';

//Styled Components
import { RoomContainer, MessagesContainer, MessageContainerBody, Message, NewMessageContainer, MessageContainerHeader, NewMessageInput, MessageContainerHeaderUser } from './ChatRoomStyles';

class ChatRoom extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
            messages: [],
            users: [],
            conversationInfo: {}
        }
    };

    //Lifecycle Methods
    componentDidMount() {
        //take the room id from redux state
        const { roomId } = this.props.conversationReducer;
        // -- Requests To Get Info From DB
        this.getConversationMessages(roomId);
        this.getConversationUsers(roomId);
        this.getConversationInfo(roomId);

        // -- Socket Event Listeners
        this.socket = io();

        //update conversation messages when a new messgae is sent
        this.socket.on('update messages', data => {
            //update local state with the messages
            this.updateMessagesOnState(data);
        });

        //emit the typing effect if a user is typing
        this.socket.on('user typing', data => {
            //change typing to state to true to show a user is typing
            this.setState({
                typing: true
            });

            //change the state to false after 3 seconds of typing
            setTimeout(this.setState({
                typing: false
            }), 3000);
        });
    };

    componentDidUpdate(previousProps) {
        //take the room id from redux state
        const { roomId } = this.props.conversationReducer;
        //check to see if the roomId on redux state is different than the previous props
        if (roomId !== previousProps.conversationReducer.roomId) {
            //get the conversation message when component updates
            this.getConversationMessages(roomId);
            this.getConversationUsers(roomId);
            this.getConversationInfo(roomId);
        };

    }

    // --- Socket Methods
    sendSocketMessage = () => {
        //check to make sure there is a message typed
        if (this.state.input === '') {
            return;
        }
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

    // --- Local Methods
    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        });
    };

    handleKeyPress = event => {
        //check to see if the key is enter
        if (event.key === 'Enter') {
            //send the new message
            this.sendSocketMessage();
        };
    };

    getConversationMessages = roomId => {
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
    };

    getConversationUsers = roomId => {
        axios.get(`/conversation/${roomId}/users`).then(response => {
            //set the users array on local state to the response of the db
            this.setState({
                users: response.data
            });
        }).catch(err => {
            console.log(err.message);
        });
    };

    getConversationInfo = roomId => {
        //make a requeast to get information about the room
        axios.get(`/conversation/info/${roomId}`).then(response => {
            //set the room information to local state
            this.setState({
                conversationInfo: response.data
            });
        }).catch(err => {
            //if there is an error, log the message
            console.log(err.message);
        })
    };

    render() {
        //destructure from state
        const { messages, conversationInfo } = this.state;

        //map through the messages on state to return the message as JSX
        const mappedMessages = messages.map(message => {
            //take user id from props
            const { user_id } = this.props.userReducer.user;
            //define custom style for id the messgae is from the user or not
            const messageStyle = user_id !== message.user_id ? { backgroundColor: '#EFF1F9', color: '#232323' } : {};
            //change the display for the message if the author isn't you
            const messageContainerStyle = user_id !== message.user_id ? { flexDirection: 'row-reverse' } : {};
            //change the display for the timestamp
            const timestampStyle = user_id !== message.user_id ? { marginRight: 'auto' } : {};

            return (
                <Message key={message.message_id} style={messageContainerStyle}>
                    <h1 style={timestampStyle}>{message.created_at}</h1>
                    <h2 style={messageStyle}>{message.body}</h2>
                </Message>
            )
        });

        return (
            <RoomContainer>
                <MessageContainerHeader>
                    <MessageContainerHeaderUser>
                        <h1>{conversationInfo.conversation_name}</h1>
                        <span>
                            <FontAwesomeIcon icon="ellipsis-v" />
                        </span>
                    </MessageContainerHeaderUser>
                </MessageContainerHeader>
                <MessagesContainer>
                    <MessageContainerBody>
                        {mappedMessages}
                    </MessageContainerBody>
                </MessagesContainer>
                <NewMessageContainer>
                    <NewMessageInput value={this.state.input} onChange={(event) => this.handleChange('input', event)} onKeyPress={(event) => this.handleKeyPress(event)} />
                    <span><FontAwesomeIcon icon="paper-plane" className="paperplane" onClick={this.sendSocketMessage} /></span>
                </NewMessageContainer>
            </RoomContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps)(ChatRoom)