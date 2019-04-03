import React, { Component } from 'react'

//Components
import LoginNav from '../LoginNav/LoginNav';
//Syled Components
import {SignUpWrapper, FieldContainer, FieldHeader, InputField, SignUpBtn} from './SignUpStyles';

export default class SignUp extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

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

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };


  render() {
    console.log(this.state)
    return (
      <div>
        <LoginNav />
        <SignUpWrapper>
          <FieldContainer>
            <FieldHeader>Create Account</FieldHeader>
            <InputField type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
            <InputField type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
            <InputField type="email" placeholder="Email" onChange={this.handleEmailChange}/>
            <SignUpBtn>Sign Up</SignUpBtn>     
          </FieldContainer>
        </SignUpWrapper>
      </div>
    )
  }
}
