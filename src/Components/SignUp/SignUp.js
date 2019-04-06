import React, { Component } from 'react'
import { connect } from 'react-redux';

//Redux Methods
import { create } from '../../redux/reducers/user_reducer';

//Components
import LoginNav from '../LoginNav/LoginNav';
//Syled Components
import { SignUpWrapper, FieldContainer, FieldHeader, InputField, SignUpBtn } from './SignUpStyles';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value
    });
  };

  signup = () => {
    const {username, password, email} = this.state;
    //make sure new user credentials exist
    if(!username || !password || !email){
      return;
    }
    //create the new user object to send to server
    const newUser = {
      username,
      password,
      email
    };
    //use the redux create method to create the new user
    this.props.create(newUser);
    //route to dashboard
    this.props.history.push('/dashboard');
  };


  render() {
    console.log(this.state)
    return (
      <div>
        <LoginNav />
        <SignUpWrapper>
          <FieldContainer>
            <FieldHeader>Create Account</FieldHeader>
            <InputField type="text" placeholder="Username" onChange={(event) => this.handleInputChange('username', event)} />
            <InputField type="password" placeholder="Password" onChange={(event) => this.handleInputChange('password', event)} />
            <InputField type="email" placeholder="Email" onChange={(event) => this.handleInputChange('email', event)} />
            <SignUpBtn onClick={this.signup}>Sign Up</SignUpBtn>
          </FieldContainer>
        </SignUpWrapper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { create })(SignUp);