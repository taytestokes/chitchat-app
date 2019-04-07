import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

//Redux Dispatchers
import { create } from '../../redux/reducers/user_reducer';

//Styled Components
import {SignUpContainer, SignUpForm, SignUpFormHeader, UsernameInput, PasswordInput, EmailInput, ErrorMessage, SignUpBtn} from './SignUpStyles';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: '',
      errorMessage: ''
    }
  }

  handleInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value
    });
  };

  signup = () => {
    //take the username, password, and email off of state
    const { username, password, email } = this.state;
    //create the new user object to send to server
    const newUser = {
      username,
      password,
      email
    };
    //send the new user data to the server
    axios.post('/auth/register', newUser).then(response => {
      //capture the new users info
      const user = response.data;
      //store the user to redux state
      this.props.create(user);
      //then route to dashboard
      this.props.history.push('/dashboard/messages');
    }).catch(error => {
      //store the error message
      const err = Object.create(error);
      //modify the error message based off of the response
      if (error.message.endsWith('400')) {
        //if username, password, or email is missing
        err.message = 'Username, Password, and Email are required'
      } else if (error.message.endsWith('401')) {
        //if username or password are incorrect
        err.message = "Username is already taken"
      } else {
        err.message = "Internal Server Error"
      }
      //set the error message to local state
      this.setState({
        errorMessage: err.message
      });
    })
  };


  render() {
    return (
        <SignUpContainer>
          <SignUpForm>
            <SignUpFormHeader>Become a Member</SignUpFormHeader>
            {this.state.errorMessage ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage>:null}
            <UsernameInput onChange={(event) => this.handleInputChange('username', event)}/>
            <PasswordInput onChange={(event) => this.handleInputChange('password', event)}/>
            <EmailInput onChange={(event) => this.handleInputChange('email', event)}/>
            <SignUpBtn onClick={this.signup}>Sign Up</SignUpBtn>
          </SignUpForm>
        </SignUpContainer>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { create })(SignUp);