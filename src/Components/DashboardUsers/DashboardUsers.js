import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styled Components
import { DashboardUsersContainer, UsersHeader, FilterUsers,  UserSubHeader, UsersContainer, UserCard, MessageButton } from './DashboardUsersStyles';

export default class DashboardUsers extends Component {
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    //Lifecycle Methods
    componentDidMount(){
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

    render() {
        //map over the users to display them as cards
        const mappedUsers = this.state.users.map((user, index) => {
            return (
                <UserCard>
                    <MessageButton>Message</MessageButton>
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
                <UserSubHeader>
                    <FontAwesomeIcon icon="user" />
                    <h1>{userCount} USERS</h1>
                </UserSubHeader>
                <UsersContainer>
                    {mappedUsers}
                </UsersContainer>
            </DashboardUsersContainer>
        )
    }
}
