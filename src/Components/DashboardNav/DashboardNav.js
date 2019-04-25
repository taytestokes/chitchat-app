import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Redux action builders
import { updateRoomId } from '../../redux/reducers/conversation_reducer';

//Styled Components
import {
  DashboardNavContainer,
  DashboardNavLinksContainer,
  DashboardNavLink,
  LogoutContainer,
  NavLogo,
  ImageContainer,
  SettingsContainer,
  PictureContainer,
  UserInfoContainer,
  EditContainer,
  SettingsMenuBackground
} from './DashboardNavStyles';


class DashboardNav extends Component {
  constructor() {
    super();

    this.state = {
      slideout: false,
      username: '',
      email: '',
      edit: false
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
    this.setState({
      edit: !this.state.edit
    });
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
                  <img src={user.picture} />
                </PictureContainer>
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
                      <button>Save</button>
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
          <img src={user.picture} onClick={this.toggleSlideout} />
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

export default connect(mapStateToProps, { updateRoomId })(DashboardNav);

