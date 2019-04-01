import React, { Component } from 'react'
import axios from 'axios';

//Components
import LoginNav from '../LoginNav/LoginNav';
import Footer from '../LoginFooter/LoginFooter';

//Styled Components
import { LoginWrapper, FieldContainer, FieldHeader, InputField, LoginBtn, SignUpBtn, FlashMessage } from './LoginStyles';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      flashMessageState: false,
      flashMessage: ''
    }
  }

  //Methods
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogin = () => {
    //take the username and password from state
    const { username, password } = this.state;
    //check if both fields are filled
    if (username.length === 0 || password.length === 0) {
      this.setState({
        flashMessage: 'Username and Password are required',
        flashMessageState: true
      });
      //flash the error message for only 3 seconds
      setTimeout(() => {
        this.setState({
          flashMessageState: false
        });
      }, 4000);
      //exit the function execution
      return;
    };

    //create an object that will hold the data we send
    const data = {
      username,
      password
    };
    //Make a POST request to our server to login
    axios.post('/auth/login', data).then(response => {
      console.log(response.data);
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <LoginNav />
        <LoginWrapper>
          <FieldContainer>
            <FieldHeader>Member Login</FieldHeader>
            {
              this.state.flashMessageState ?
                <FlashMessage><h1>{this.state.flashMessage}</h1></FlashMessage>
                :
                null
            }
            <InputField type="text" placeholder="Username" onChange={event => this.handleUsernameChange(event)} />
            <InputField type="password" placeholder="Password" onChange={event => this.handlePasswordChange(event)} />
            <LoginBtn onClick={this.handleLogin}>Login</LoginBtn>
            <span>or</span>
            <SignUpBtn>Sign Up</SignUpBtn>
          </FieldContainer>
        </LoginWrapper>
        <Footer />
      </div>
    )
  }
}
