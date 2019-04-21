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
  SignUpLink,
} from './LoginStyles';

//Redux Actions
import { login } from '../../redux/reducers/user_reducer';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      file: '',
      fileName: '',
      fileType: '',
      img: ''
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


  handlePhoto = event => {
    //this will make a generic file reader that can convert files into strings and allows us to upload it a server
    const reader = new FileReader();
    //the file is located here
    const file = event.target.files[0];
    console.log(file)
    //this is an event handler that will not actually execute until line 100 executes
    reader.onload = photo => {
      //the 'photo' param is the processed image
      this.setState({
        file: photo.target.result,
        fileName: file.name,
        fileType: file.type,
        img: '',
      });
    }
    //take the file from the input field and proccess it as a dataurl (a special way to interpret files)
    reader.readAsDataURL(file);
  }

  sendPhoto = () => {
    //destructure the image from state
    const {file, fileName, fileType, img} = this.state;
     //the img obj to send to server
     const image = {
       photo: {
        file,
        fileName,
        fileType,
        img
       }
     };
    //make a post req to the server
    axios.post('/api/s3', image).then(response => {
      console.log(response);
      this.setState({
        img: response.data.Location
      })
    }).catch(err => console.log(err.message))
  }



  render() {
    console.log(this.state.img);
    return (
      <LoginContainer>
        <LeftContainer>
          <img src={this.state.img}/>
          <input type='file' onChange={this.handlePhoto}/>
          <button onClick={this.sendPhoto}>Send photo</button>
          <PlaneOne />
          <PlaneTwo />
        </LeftContainer>
        <RightContainer>
          <LoginFormContainer>
            <LoginFormHeader>Sign in to ChitChat</LoginFormHeader>
            <LoginFormSubHeader>Enter your details to continue</LoginFormSubHeader>
            <LoginUsernameInput onChange={(event) => this.handleInputChange('username', event)} />
            <LoginPasswordInput onChange={(event) => this.handleInputChange('password', event)} />
            <LoginBtn onClick={this.handleLogin}>Sign In</LoginBtn>
            <SignUpWrapper>
              <h3>Don't have an account?</h3>
              <SignUpLink to="/signup">Sign Up</SignUpLink>
            </SignUpWrapper>
          </LoginFormContainer>
        </RightContainer>
      </LoginContainer>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { login })(Login);