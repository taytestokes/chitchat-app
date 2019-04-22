import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Styled Components
import {
    DashboardUsersContainer,
    UsersHeader,
    UsersContainer,
    UserCard,
    UserCardInfo,
    MessageButton,
    UserSubHeader,
    NextBtn,
    PrevBtn,
    SearchInput,
    SearchBtn
} from './DashboardUsersStyles';

class DashboardUsers extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            // usersPerPage: 8, // This can be implemented later if desired
            currentPage: 1,
            nextPage: null,
            previousPage: null,
            searchInput: ''
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
            console.log(response.data);
        });
    };

    // --- Pagination

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
            console.log(user)
            return (
                <UserCard key={user.user_id}>
                    <img src={user.pic_url} />
                    <UserCardInfo>
                        <div>
                            <h1>{user.username}</h1>
                            <h2>{user.email}</h2>
                        </div>
                        <MessageButton onClick={() => this.messageNewUser(user)}>
                            <FontAwesomeIcon icon="paper-plane"/>
                        </MessageButton>
                    </UserCardInfo>
                </UserCard>
            )
        });



        return (
            <DashboardUsersContainer>
                <UsersHeader>

                </UsersHeader>
                <UserSubHeader>
                    <SearchInput />
                    <SearchBtn>
                        <FontAwesomeIcon icon="search" />
                    </SearchBtn>
                    <PrevBtn onClick={this.prevPage}>
                        <FontAwesomeIcon icon="chevron-left" />
                    </PrevBtn>
                    <NextBtn onClick={this.nextPage}>
                        <FontAwesomeIcon icon="chevron-right" />
                    </NextBtn>
                </UserSubHeader>
                <UsersContainer>
                    {mappedUsers}
                </UsersContainer>
            </DashboardUsersContainer>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashboardUsers);
