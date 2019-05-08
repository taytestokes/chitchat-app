import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import axios from 'axios';

//Redux action builders
import { updateRoomId } from '../../redux/reducers/conversation_reducer';
import { updateUser } from '../../redux/reducers/user_reducer';

//Styled Components
import {
  DashboardNavContainer,
  DashboardNavLinksContainer,
  DashboardNavLink,
  LogoutContainer,
  ImageContainer,
  SettingsContainer,
  PictureContainer,
  UserInfoContainer,
  EditContainer,
  SettingsMenuBackground,
  UploadPicContainer
} from './DashboardNavStyles';


class DashboardNav extends Component {
  constructor() {
    super();

    this.state = {
      slideout: false,
      username: '',
      email: '',
      edit: false,
      file: '',
      fileName: '',
      fileType: '',
      img: ''
    };
  };

  // --- Lifecycle Methods
  componentDidMount() {
    //take the user from redux state
    const { user } = this.props.userReducer;
    //change the value of the inputs
    this.setState({
      username: user.username,
      email: user.email
    });
  };

  // --- Local Methods
  handleInputChange = (type, event) => {
    if (this.state.edit) {
      //update the state
      this.setState({
        [type]: event.target.value
      });
    }
    return;
  };

  handleLogout = () => {
    //update room id to null on props
    this.props.updateRoomId(null);
  };

  toggleSlideout = () => {
    //opens the user settings menu
    this.setState({
      slideout: !this.state.slideout
    });
  };

  toggleEdit = () => {
    //toggle the edit option
    this.setState({
      edit: !this.state.edit
    });
  };

  updateUserInfo = () => {
    //take the user id that is currently logged
    const { user } = this.props.userReducer;
    //take username and email off of local state
    const { username, email } = this.state;
    //create a body to send
    const body = {
      username,
      email
    };
    //make a request to the server to update user info
    axios.post(`/users/update/user/${user.user_id}`, body).then(response => {
      //toggle the edit
      this.toggleEdit();
    }).catch(err => {
      console.log(err.message);
    });
  };

  // --- S3 Methods
  handlePhoto = event => {
    //this will make a generic file reader that can convert files into strings and allows us to upload it a server
    const reader = new FileReader();
    //the file is located here
    const file = event.target.files[0];
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
    //take the user from redux state
    const { user } = this.props.userReducer;
    //destructure the image from state
    const { file, fileName, fileType, img } = this.state;
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
    axios.post(`/users/user/picture/${user.user_id}`, image).then(response => {
      //store the update user
      let user = response.data[0];
      //update the user on redux state
      this.props.updateUser(user);
    }).catch(err => console.log(err.message))
  };

  render() {
    //take the user from redux state
    const { user } = this.props.userReducer;
    return (
      <DashboardNavContainer>
        {
          this.state.slideout ?
            <SettingsMenuBackground>
              <SettingsContainer>
                <PictureContainer>
                  <img src={user.picture} alt="user" />
                </PictureContainer>
                {
                  this.state.edit ?
                    <UploadPicContainer>
                      <input type="file" onChange={this.handlePhoto} />
                      <button onClick={this.sendPhoto}>Upload</button>
                    </UploadPicContainer>
                    :
                    null
                }
                <UserInfoContainer>
                  <h1>Username</h1>
                  {
                    this.state.edit ?
                      <input type="text" value={this.state.username} onChange={(event) => this.handleInputChange('username', event)} />
                      :
                      <div>{this.state.username}</div>
                  }
                  <h1>Email</h1>
                  {
                    this.state.edit ?
                      <input type="text" value={this.state.email} onChange={(event) => this.handleInputChange('email', event)} />
                      :
                      <div>{this.state.email}</div>
                  }
                  {
                    this.state.edit ?
                      <button onClick={this.updateUserInfo}>Save</button>
                      :
                      null
                  }
                </UserInfoContainer>
                <EditContainer>
                  <FontAwesomeIcon icon="arrow-left" onClick={this.toggleSlideout} />
                  <FontAwesomeIcon icon="pencil-alt" onClick={this.toggleEdit} className="edit" />
                </EditContainer>
              </SettingsContainer>
            </SettingsMenuBackground>
            :
            null
        }
        <ImageContainer>
          <img src={user.picture} onClick={this.toggleSlideout} alt="user" />
        </ImageContainer>
        <DashboardNavLinksContainer>
          <DashboardNavLink activeClassName="active" to={`/dashboard/messages`} onClick={this.handleLogout}>
            <FontAwesomeIcon icon="comment-alt" />
            <h1>Messages</h1>
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/users" onClick={this.handleLogout}>
            <FontAwesomeIcon icon="users" />
            <h1>Explore</h1>
          </DashboardNavLink>
        </DashboardNavLinksContainer>
        <LogoutContainer to="/" onClick={this.handleLogout}>
          <FontAwesomeIcon icon="sign-out-alt" />
          <h1>Logout</h1>
        </LogoutContainer>
      </DashboardNavContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { updateRoomId, updateUser })(DashboardNav);

