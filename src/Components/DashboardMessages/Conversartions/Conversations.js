import React, { Component } from 'react'

//Styled Components
import { ConversationsContainer, ConversationFinderContainer, ConversationFinder, ConversationTab } from './ConversationsStyles';

class Conversations extends Component {
    //Lifecycle Methods
    componentDidMount(){
        this.props.getUsersConversations();
    }

    render() {
        //map through the user conversations on props and return a conversation tab displayed in JSX
        const mappedUserConversations = this.props.userConversations.map((conversation, index) => (
            //links to the conversation
            <ConversationTab key={index} to={`/dashboard/messages/${conversation.conversation_id}`} onClick={() => this.props.getConversationID(conversation.conversation_id)} activeClassName="active">
                {conversation.name}
            </ConversationTab>
        ));

        return (
            <ConversationsContainer>
                <ConversationFinderContainer>
                    <ConversationFinder placeholder="Search messages" />
                </ConversationFinderContainer>
                {mappedUserConversations}
            </ConversationsContainer>
        )
    }
}

export default Conversations;