import React, { Component } from 'react'

//Components
import ConversationsContainer from './Conversartions/Conversations';
import ChatRoom from './ChatRoom/ChatRoom';

//Styled Components
import { MessageDashboard } from './DashboardMessagesStyles';

class DashboardMessages extends Component {
    render() {
        return (
            <MessageDashboard>
                <ConversationsContainer />
                <ChatRoom />
            </MessageDashboard>
        )
    }
}

export default DashboardMessages;