import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import io from 'socket.io-client';



//Dispatchers from redux
import { updateRoomId } from '../../../redux/reducers/conversation_reducer';

//Components 
import ConversationTabInfo from './ConversationTab/ConversationTab';

//Styled Components
import {
    ConversationsContainer,
    InboxContainer,
    ConversationTab
} from './ConversationsStyles';

class Conversations extends Component {
    constructor() {
        super();

        this.state = {
            userConversations: [],
        }
    }

    //Lifecycle Methods
    componentDidMount() {
        this.getUsersConversations();
        this.socket = io();
    };

    // ----- Methods ----- //
    getUsersConversations = () => {
        //get the user from redux state
        const { user } = this.props.userReducer;
        //ajax request to server for users conversations
        axios.get(`/user/conversations/${user.user_id}`).then(response => {
            //store the conversations on local state
            this.setState({
                userConversations: response.data
            });
        })
    };

    //Socket Methods
    updateRoomId = (roomId) => {
        //call redux method to update room id
        this.props.updateRoomId(roomId);
    };

    joinSocketRoom = (roomId) => {
        //emit to the sockets to join the room
        this.socket.emit('join room', {
            roomId
        });
    };

    //will handle updating the room id and will join the socket room
    handleRoomJoin = (roomId) => {
        this.updateRoomId(roomId);
        this.joinSocketRoom(roomId);
    };


    render() {
        //map through the user conversations on props and return a conversation tab displayed in JSX
        const mappedUserConversations = this.state.userConversations.map((conversation, index) => {
            //take the conversaiton id from the conversation obj
            return (
                <ConversationTab key={index} to={`/dashboard/messages/${conversation.conversation_id}`}
                    activeClassName="active" onClick={() => this.handleRoomJoin(conversation.conversation_id)}>
                    <ConversationTabInfo conversation={conversation}/>
                </ConversationTab>
            )
        });

        return (
            <ConversationsContainer>
                <InboxContainer>
                    {mappedUserConversations}
                </InboxContainer>
            </ConversationsContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps, { updateRoomId })(Conversations);