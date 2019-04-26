import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

//Styled Components
import { ConversationTab, ImageContainer, InfoContainer, DateContainer } from './ConversationTabStyle';

class ConversationTabCompInfo extends Component {
    constructor() {
        super();

        this.state = {
            conversationInfo: {},
            conversationUsers: []
        };
    }

    // --- LifeCycle Methods
    componentDidMount() {
        //take the conversation info off of props
        const { conversation } = this.props;
        //get the convertsation info
        this.getConversationTabInfo(conversation.conversation_id);
    }

    // --- Methods
    getConversationTabInfo = id => {
        //make an http req to server to get info for the conversation
        axios.get(`/conversation/information/${id}`).then(response => {
            //set the convo info on state tp the data from the response
            this.setState({
                conversationInfo: response.data
            })
        });
    }

    getConversationUsers = conversationId => {
        //make an http request to get the users in the conversations
        axios.get(`/conversation/users/${conversationId}?user_id=${}`)
    }

    render() {
        //take the conversation infp off local state
        const { conversationInfo } = this.state;
        console.log(this.state);
        return (
            <ConversationTab>
                <ImageContainer>
                    <img src={conversationInfo.picture} alt="user" />
                </ImageContainer>
                <InfoContainer>
                    <h1>{conversationInfo.conversation_name}</h1>
                    <h2>{conversationInfo.username}</h2>
                    <h3>{conversationInfo.body}</h3>
                </InfoContainer>
                <DateContainer>
                    <h1>{conversationInfo.created_at}</h1>
                </DateContainer>
            </ConversationTab>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ConversationTabCompInfo);