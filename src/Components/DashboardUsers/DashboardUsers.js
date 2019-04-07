import React, { Component } from 'react'
import axios from 'axios';

//Styled Components
import { DashboardUsersContainer, UsersHeader, FilterUsers } from './DashboardUsersStyles';

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
        return (
            <DashboardUsersContainer>
                <UsersHeader>
                    <FilterUsers />
                </UsersHeader>
            </DashboardUsersContainer>
        )
    }
}
