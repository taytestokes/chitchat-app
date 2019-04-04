import React, { Component } from 'react'

//Components
import ConversationsContainer from './Conversartions/Conversations';

//Styled Components
import { MessageDashboard } from './DashboardMessagesStyles';

export default class DashboardMessages extends Component {
    render() {
        return (
            <MessageDashboard>
                <ConversationsContainer />
            </MessageDashboard>
        )
    }
}
