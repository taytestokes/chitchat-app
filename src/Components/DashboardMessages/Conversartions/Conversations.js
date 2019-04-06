import React, { Component } from 'react'

//Styled Components
import { ConversationsContainer, ConversationFinderContainer, ConversationFinder, ConversationTab } from './ConversationsStyles';

class Conversations extends Component {
    render() {
        //map through the user conversations on props and return a conversation tab displayed in JSX
        const mappedUserConversations = this.props.userConversations.map((conversation, index) => (
            <ConversationTab key={index} to={`/dashboard/messages/${conversation.conversation_id}`} activeClassName="active">

            </ConversationTab>
        ));

        return (
            <ConversationsContainer>
                <ConversationFinderContainer>
                    <ConversationFinder placeholder="Search messages" />
                </ConversationFinderContainer>
                {mappedUserConversations}
                <button onClick={this.props.getUsersConversations}>Get Conversations</button>
            </ConversationsContainer>
        )
    }
}

export default Conversations;