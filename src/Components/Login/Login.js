import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
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
      errorMessage: ''
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
      console.log(error.message)
      //store the error message
      const err = Object.create(error);
      //modify the error message based off of the response
      if(error.message.endsWith('400')){
        //if username or password is missing
        err.message = 'Username and Password are required'
      }else if(error.message.endsWith('401')){
        //if username or password are incorrect
        err.message = "Invalid Username or Password"
      }else {
        err.message = "Internal Server Error"
      }
      //set the error message to local state
      this.setState({
        errorMessage: err.message
      });
    })
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <LoginNav />
        <LoginWrapper>
          <FieldContainer>
            <FieldHeader>Member Login</FieldHeader>
            {
              this.state.errorMessage ?
                <FlashMessage><h1>{this.state.errorMessage}</h1></FlashMessage>
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

export default connect(mapStateToProps, { login })(Login)