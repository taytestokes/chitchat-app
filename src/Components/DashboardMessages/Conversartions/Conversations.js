import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

//Styled Components
import { ConversationsContainer, ConversationFinder } from './ConversationsStyles';

class Conversations extends Component {

    getConvo = () => {
        const { user_id } = this.props.user;
        axios.get(`/conversations/${user_id}`).then(response => {
            console.log(response.data);
        });
    };

    render() {
        return (
            <ConversationsContainer>
                <ConversationFinder placeholder="Search your inbox" />
                <button onClick={this.getConvo}>Get Convo</button>
            </ConversationsContainer>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Conversations);