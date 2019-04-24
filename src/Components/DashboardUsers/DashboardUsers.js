import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Styled Components
import {
    DashboardUsersContainer,
    UsersHeader,
    UsersContainer,
    UserContainerHeader,
    UserCard,
    MessageButton,
    NextBtn,
    PrevBtn
} from './DashboardUsersStyles';

class DashboardUsers extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            // usersPerPage: 8, // This can be implemented later if desired
            currentPage: 1,
            nextPage: null,
            previousPage: null
        };
    }

    //Lifecycle Methods
    componentWillMount() {
        this.getUsers();
    }

    //Methods
    getUsers = (pageNumber = this.state.currentPage) => {
        //get all of the users that are != to the user logged in
        axios
            .get(`/users?page=${pageNumber}`)
            .then(response => {
                const {
                    result,
                    pageNumber,
                    nextPage,
                    previousPage,
                    total,
                } = response.data;
                //store the users to local state
                this.setState({
                    nextPage,
                    previousPage,
                    total,
                    users: result,
                    currentPage: pageNumber,
                });
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
            console.log(response.data)
            // this.props.history.push(`/dashbaord/messages/${}`)
        });
    };

    // --- Pagination Skips

    nextPage = () => {
        //destructure from state
        const { nextPage } = this.state;
        //check to see if end of users
        if (nextPage != null) {
            this.getUsers(nextPage);
        }
    };

    prevPage = () => {
        //destructure previous page from state
        const { previousPage } = this.state;
        //check to see if start of users
        if (previousPage != null) {
            this.getUsers(previousPage);
        }
    };

    render() {
        //destructure from state
        const { users } = this.state;
        //map over the users to display them as cards
        const mappedUsers = users.map(user => {
            return (
                <UserCard key={user.user_id}>
                    <span><img src={user.picture} alt="profile" /></span>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                    <span>
                        <MessageButton onClick={() => this.messageNewUser(user)}>
                            <FontAwesomeIcon icon="paper-plane" />
                        </MessageButton>
                    </span>
                </UserCard>
            )
        });



        return (
            <DashboardUsersContainer>
                <UsersHeader>
                    <h1>All Users</h1>
                    <PrevBtn onClick={this.prevPage}><FontAwesomeIcon icon="chevron-left" /></PrevBtn>
                    <NextBtn onClick={this.nextPage}><FontAwesomeIcon icon="chevron-right" /></NextBtn>
                </UsersHeader>
                <UsersContainer>
                    <UserContainerHeader>
                        <span>Picture</span>
                        <span>Username</span>
                        <span>Email</span>
                        <span>Message</span>
                    </UserContainerHeader>
                    {mappedUsers}
                </UsersContainer>
            </DashboardUsersContainer>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashboardUsers);
