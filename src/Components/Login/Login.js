import React, { Component } from 'react'

//Components
import LoginNav from '../LoginNav/LoginNav';
import Footer from '../LoginFooter/LoginFooter';

//Styled Components
import { LoginWrapper, FieldContainer, FieldHeader, InputField, LoginBtn, SignUpBtn } from './LoginStyles';

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginNav />
        <LoginWrapper>
          <FieldContainer>
            <FieldHeader>Member Login</FieldHeader>
            <InputField type="text" placeholder="Username"/>
            <InputField type="password" placeholder="Password"/>
            <LoginBtn>Login</LoginBtn>
            <span>or</span>
            <SignUpBtn>Sign Up</SignUpBtn>     
          </FieldContainer>
        </LoginWrapper>
        <Footer />
      </div>
    )
  }
}
