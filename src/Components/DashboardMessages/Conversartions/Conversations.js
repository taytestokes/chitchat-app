import React, { Component } from 'react'

//Styled Components
import { ConversationsContainer, ConversationFinder } from './ConversationsStyles';

class Conversations extends Component {
    render() {
        return (
            <ConversationsContainer>
                <ConversationFinder placeholder="Search your inbox" />
            </ConversationsContainer>
        )
    }
}

export default Conversations;