import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import ConversationsContainer from './Conversartions/Conversations';
import ChatRoom from './ChatRoom/ChatRoom';

//Styled Components
import { MessageDashboard, PlaceHolder } from './DashboardMessagesStyles';

class DashboardMessages extends Component {

    render() {
        //take room id off props to conditional render
        const { roomId } = this.props.conversationReducer;
        return (
            <MessageDashboard>
                <ConversationsContainer />
                {
                    roomId ?
                    <ChatRoom />
                    :
                    <PlaceHolder>
                        <FontAwesomeIcon icon="comment-alt"/>
                    </PlaceHolder>
                }
                
            </MessageDashboard>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DashboardMessages);