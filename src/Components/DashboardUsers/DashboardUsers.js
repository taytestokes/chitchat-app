import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

//Styled Components
import { DashboardUsersContainer, UsersHeader, UsersContainer, UserCard, MessageButton } from './DashboardUsersStyles';

class DashboardUsers extends Component {
    constructor() {
        super();

        this.state = {
            users: []
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

    render() {

        //map over the users to display them as cards
        const mappedUsers = this.state.users.map(user => {
            return (
                <UserCard key={user.user_id}>
                    {user.username}
                    <MessageButton onClick={() => this.messageNewUser(user)}>
                        Message
                    </MessageButton>
                </UserCard>
            )
        })

        return (
            <DashboardUsersContainer>
                <UsersHeader>
                </UsersHeader>
                <UsersContainer>
                    {mappedUsers}
                </UsersContainer>
            </DashboardUsersContainer>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashboardUsers);
