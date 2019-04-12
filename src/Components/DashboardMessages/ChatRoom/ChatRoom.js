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

    //Lifecycle Methods
    componentDidMount() {
        //get socket
        this.socket = io();

        //socket event listeners

    }

    componentWillUnmount(){
        //disconnect from the socket
        this.socket.disconnect();
    }

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

    //Local Methods
    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        });
    };

    render() {
        console.log(this.state);
        return (
            <RoomContainer>
                <MessagesContainer>
                    <MessageContainerHeader>

                    </MessageContainerHeader>
                </MessagesContainer>
                <NewMessageContainer>
                    <NewMessageInput value={this.state.input} onChange={(event) => this.handleChange('input', event)}/>
                    <span><FontAwesomeIcon icon="paper-plane" className="paperplane" onClick={this.sendSocketMessage}/></span>
                </NewMessageContainer>
            </RoomContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps)(ChatRoom)