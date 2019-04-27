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
        //take user off of redux state
        const { user } = this.props.userReducer;
        //get the convertsation info
        this.getConversationTabInfo(conversation.conversation_id);
        //get the conversation users
        this.getConversationUsers(conversation.conversation_id, user.user_id);
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

    getConversationUsers = (conversationId, userId) => {
        //make an http request to get the users in the conversations
        axios.get(`/conversation/users/${conversationId}?user_id=${userId}`).then(response => { 
            //set the response to local state
            this.setState({
                conversationUsers: response.data
            })
        });
    };

    render() {
        //take the info off local state
        const { conversationInfo, conversationUsers } = this.state;
        //map through the conversation users to display the users picture in the conversation
        const mappedUser = conversationUsers.map((user, index) => {
            return (
                <img src={user.picture} alt="user" key={index}/>
            )
        })

        console.log(this.state);
        return (
            <ConversationTab>
                <ImageContainer>
                    {mappedUser}
                </ImageContainer>
                <InfoContainer>
                    <h1>{conversationInfo.conversation_name}</h1>
                    <h2>{conversationInfo.body}</h2>
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