import React, { Component } from 'react'
import { connect } from 'react-redux';
//Components
import LoginNav from '../LoginNav/LoginNav';
//Styled Components
import { LoginWrapper, FieldContainer, FieldHeader, InputField, LoginBtn, SignUpBtn, FlashMessage } from './LoginStyles';

//Redux Actions
import { login } from '../../redux/reducers/user_reducer';

class Login extends Component {
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

  handleLogin = (event) => {
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
      }, 3000);
      //exit the function execution
      return;
    }; 

    //create an object that will hold the data we send
    const userData = {
      username,
      password
    };
    //use redux login method
    this.props.login(userData);
    //reroute to dash
    this.props.history.push('/dashboard/messages');
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
            <SignUpBtn to="/signup"><h1>Sign Up</h1></SignUpBtn>
          </FieldContainer>
        </LoginWrapper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {login})(Login)