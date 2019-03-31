import React, { Component } from 'react'

//Components
import LoginNav from '../LoginNav/LoginNav';
import Footer from '../LoginFooter/LoginFooter';
//Syled Components
import {SignUpWrapper, FieldContainer, FieldHeader, InputField, SignUpBtn} from './SignUpStyles';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <LoginNav />
        <SignUpWrapper>
          <FieldContainer>
            <FieldHeader>Create Account</FieldHeader>
            <InputField type="text" placeholder="Username"/>
            <InputField type="password" placeholder="Password"/>
            <InputField type="email" placeholder="Email"/>
            <SignUpBtn>Sign Up</SignUpBtn>     
          </FieldContainer>
        </SignUpWrapper>
        <Footer />
      </div>
    )
  }
}
