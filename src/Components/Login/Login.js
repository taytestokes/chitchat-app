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
  LoginWrapper,
  FieldContainer,
  FieldHeader,
  InputField,
  SignUpBtn,
  FlashMessage
} from './LoginStyles';

//Redux Actions
import { login } from '../../redux/reducers/user_reducer';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  //Methods
  handleInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleLogin = () => {
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

  render() {
    return (
      <LoginContainer>
        <LeftContainer>
          <PlaneOne />
          <PlaneTwo />
        </LeftContainer>
        <RightContainer>
          <LoginFormContainer>
            <LoginFormHeader>Sign in to ChitChat</LoginFormHeader>
            <LoginFormSubHeader>Enter your details to continue</LoginFormSubHeader>
            <LoginUsernameInput onChange={(event) => this.handleInputChange('username', event)}/>
            <LoginPasswordInput onChange={(event) => this.handleInputChange('password', event)}/>
            <LoginBtn onClick={this.handleLogin}>Sign In</LoginBtn>
          </LoginFormContainer>
        </RightContainer>
      </LoginContainer>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { login })(Login)



{/* < LoginWrapper >
<FieldContainer>
  <FieldHeader>Member Login</FieldHeader>
  {
    this.state.errorMessage ? <FlashMessage><h1>{this.state.errorMessage}</h1></FlashMessage> : null
  }
  <InputField type="text" placeholder="Username" onChange={event => this.handleInputChange('username', event)} />
  <InputField type="password" placeholder="Password" onChange={event => this.handleInputChange('password', event)} />
  <LoginBtn onClick={this.handleLogin}>Login</LoginBtn>
  <span>or</span>
  <SignUpBtn to="/signup"><h1>Sign Up</h1></SignUpBtn>
</FieldContainer>
      </LoginWrapper > */}