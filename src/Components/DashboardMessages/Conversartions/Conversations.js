import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

//Styled Components
import { ConversationsContainer, ConversationFinderContainer, ConversationFinder, ConversationTab } from './ConversationsStyles';

class Conversations extends Component {
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
        //map through the user conversations on local state and return a conversation tab displayed in JSX
        const mappedUserConversations = this.state.userConversations.map((conversation, index) => (
            <ConversationTab key={index}>

            </ConversationTab>
        ));

        return (
            <ConversationsContainer>
                <ConversationFinderContainer>
                    <ConversationFinder placeholder="Search your inbox" />
                </ConversationFinderContainer>
                <button onClick={this.getUsersConversations}>Get Conversations</button>
                {mappedUserConversations}
            </ConversationsContainer>
        )
    }
}
//Map the redux store state to the components props
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Conversations);