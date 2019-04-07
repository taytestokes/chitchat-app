import React, { Component } from 'react'
import axios from 'axios';

//Styled Components
import { DashboardUsersContainer } from './DashboardUsersStyles';

export default class DashboardUsers extends Component {
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    getUsers = () => {
        axios.get('/users').then(response => {
            console.log(response.data);
        })
    }

    render() {
        return (
            <DashboardUsersContainer>
                <button onClick={this.getUsers}>get users</button>
            </DashboardUsersContainer>
        )
    }
}
