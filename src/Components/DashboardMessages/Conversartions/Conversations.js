import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styled Components
import { ConversationsContainer, ConversationFinder } from './ConversationsStyles';

export default class Conversations extends Component {
    render() {
        return (
            <ConversationsContainer>
                <ConversationFinder placeholder="Search your inbox"/>
            </ConversationsContainer>
        )
    }
}
