import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Styled Components
import { DashboardUsersContainer, UsersHeader, FilterUsers, UserSubHeader, UsersContainer, UserCard, MessageButton, MessageModalContainer, MessageModal, ModalHeader, CancelModalBtn, ModalMessageInput, SendMessageModalBtn } from './DashboardUsersStyles';

class DashboardUsers extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            showMessageModel: false
        }
    }

    //Lifecycle Methods
    componentDidMount() {
        this.getUsers();
    }

    //Methods
    getUsers = () => {
        //get all of the users that are != to the user logged in
        axios.get('/users').then(response => {
            //store the users to local state
            this.setState({
                users: response.data
            })
        });
    };

    messageNewUser = (newUser) => {
        //store the current user logged in
        const user = this.props.userReducer.user;
        //store the senders and receivers info
        const data = {
            newUser,
            user
        }
        //http request to server to create a new conversation in db
        axios.post('/new/conversation', data).then(response => {
            console.log(response.data);
        });
    };

    toggleMessageModel = () => {
        this.setState({
            showMessageModel: !this.state.showMessageModel
        })
    }

    render() {
        console.log(this.state);
        //map over the users to display them as cards
        const mappedUsers = this.state.users.map((user, index) => {
            return (
                <UserCard key={index}>
                    {user.username}
                    <MessageButton onClick={this.toggleMessageModel}>Message</MessageButton>
                    {
                        this.state.showMessageModel ?
                        <MessageModalContainer>
                            <MessageModal>
                                <ModalHeader>
                                    <h1>New message to: {user.username}</h1>
                                    <CancelModalBtn>Cancel</CancelModalBtn>
                                </ModalHeader>
                                <ModalMessageInput />
                                <SendMessageModalBtn>
                                    Send
                                    <FontAwesomeIcon icon="envelope"/>
                                </SendMessageModalBtn>
                            </MessageModal>
                        </MessageModalContainer>
                        :
                        null
                    }
                </UserCard>
            )
        })

        //How many users exist
        const userCount = this.state.users.length;

        return (
            <DashboardUsersContainer>
                <UsersHeader>
                    <FilterUsers />
                </UsersHeader>
                <UsersContainer>
                    <UserSubHeader>
                        <FontAwesomeIcon icon="user" />
                        <h1>{userCount} USERS</h1>
                    </UserSubHeader>
                    {mappedUsers}
                </UsersContainer>
            </DashboardUsersContainer>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashboardUsers);