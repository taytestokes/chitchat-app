import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';


//Components
import ConversationsContainer from './Conversartions/Conversations';
import ChatRoom from './ChatRoom/ChatRoom';

//Styled Components
import { MessageDashboard } from './DashboardMessagesStyles';

class DashboardMessages extends Component {
    constructor() {
        super();

        this.state = {
            userConversations: []
        }
    }

    // ----- Methods ----- //
    getUsersConversations = () => {
        //get the users id from redux state
        const { user_id } = this.props.user;
        //ajax request to server for users conversations
        axios.get(`/user/conversations/${user_id}`).then(response => {
            //store the conversations on local state
            this.setState({
                userConversations: response.data
            });
        });
    };

    render() {
        return (
            <MessageDashboard>
                <ConversationsContainer userConversations={this.state.userConversations} getUsersConversations={this.getUsersConversations}/>
                <ChatRoom />
            </MessageDashboard>
        )
    }
}

//Map the redux store state to the components props
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(DashboardMessages);