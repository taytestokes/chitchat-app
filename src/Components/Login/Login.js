import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

//Styled Components
import {
  LoginContainer,
  LeftContainer,
  RightContainer,
  PlaneOne,
  PlaneTwo,
  LoginFormContainer,
  LoginFormHeader,
  LoginFormSubHeader,
  LoginUsernameInput,
  LoginPasswordInput,
  LoginBtn,
  SignUpWrapper,
  SignupFormContainer,
  SignupFormHeader,
  SignupFormSubHeader,
  SignupUsernameInput,
  SignupPasswordInput,
  SignupEmailInput,
  SignupBtn,
  LoadingCircle
} from './LoginStyles';

//Redux Actions
import { login, create } from '../../redux/reducers/user_reducer';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: '',
      loginForm: true,
      loading: false,
      errorMessage: ''
    }
  }

  //Methods
  handleInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value
    });
  };

  changeForm = () => {
    //will change the what form we are seeing, either login or signup and resets the previous state
    this.setState({
      loginForm: !this.state.loginForm,
      username: '',
      password: ''
    })
  };

  handleLogin = () => {
    //change state to show loading animation
    this.setState({
      loading: !this.state.loading
    });
    //take the username and password from state
    const { username, password } = this.state;
    //create an object that will hold the users credentials
    const userCredentials = {
      username,
      password
    };
    //make a POST request to the auth route in server with user credentials
    axios.post('/auth/login', userCredentials).then(response => {
      //store the returned user data
      const user = response.data;
      //store the user on redux
      this.props.login(user);
      //route to the dashboard if the user is set to the redux store
      this.props.history.push('/dashboard/messages');
    }).catch(error => {
      //change the state to stop loaidng animation
      this.setState({
        loading: !this.state.loading
      });
      //store the error message
      const err = Object.create(error);
      //modify the error message based off of the response
      if (error.message.endsWith('400')) {
        //if username or password is missing
        err.message = 'Username and Password are required'
      } else if (error.message.endsWith('401')) {
        //if username or password are incorrect
        err.message = "Invalid Username or Password"
      } else {
        err.message = "Internal Server Error"
      }
      //set the error message to local state
      this.setState({
        errorMessage: err.message
      });
    })
  };

  handleSignup = () => {
    //change state to get a loading animation
    this.setState({
      loading: !this.state.loading
    });
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
      //stop the loading animation
      this.setState({
        loading: !this.state.loading
      });
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
      <LoginContainer>
          {
            this.state.loginForm ?
              <LoginFormContainer>
                <LoginFormHeader>Sign in to ChitChat</LoginFormHeader>
                <LoginFormSubHeader>Enter your details to continue</LoginFormSubHeader>
                <LoginUsernameInput onChange={(event) => this.handleInputChange('username', event)} />
                <LoginPasswordInput onChange={(event) => this.handleInputChange('password', event)} />
                {
                  this.state.loading ?
                    <LoadingCircle />
                  :
                    <LoginBtn onClick={this.handleLogin}>Sign In</LoginBtn>
                }
                <SignUpWrapper>
                  <h3>Don't have an account?</h3>
                  <span onClick={this.changeForm}>Sign Up</span>
                </SignUpWrapper>
              </LoginFormContainer>
            :
              <SignupFormContainer>
                <SignupFormHeader>Create new account</SignupFormHeader>
                <SignupFormSubHeader>Enter the details for your new account</SignupFormSubHeader>
                <SignupUsernameInput onChange={(event) => this.handleInputChange('username', event)}/>
                <SignupPasswordInput onChange={(event) => this.handleInputChange('password', event)}/>
                <SignupEmailInput onChange={(event) => this.handleInputChange('email', event)}/>
                {
                  this.state.loading ?
                    <LoadingCircle />
                  :
                  <SignupBtn onClick={this.handleSignup}>Sign Up</SignupBtn>
                }
                <SignUpWrapper signup>
                  <h3>Changed your mind?</h3>
                  <span onClick={this.changeForm}>Cancel</span>
                </SignUpWrapper>
              </SignupFormContainer>
          }
      </LoginContainer>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { login, create })(Login);