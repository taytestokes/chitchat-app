import React, { Component } from 'react'
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(DashboardMessages);