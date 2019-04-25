import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Redux action builders
import { updateRoomId } from '../../redux/reducers/conversation_reducer';

//Styled Components
import {
  DashboardNavContainer, DashboardNavLinksContainer,
  DashboardNavLink, LogoutContainer, NavLogo
} from './DashboardNavStyles';

class DashboardNav extends Component {

  // --- Local Methods
  handleLogout = () => {
    //update room id to null on props
    this.props.updateRoomId(null);
  };

  render() {
    return (
      <DashboardNavContainer>
        <NavLogo />
        <DashboardNavLinksContainer>
          <DashboardNavLink activeClassName="active" to={`/dashboard/messages`} onClick={this.handleLogout}>
            <FontAwesomeIcon icon="comment-alt" />
            <h1>Messages</h1>
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/users" onClick={this.handleLogout}>
            <FontAwesomeIcon icon="users" />
            <h1>Explore</h1>
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/settings" onClick={this.handleLogout}>
            <FontAwesomeIcon icon="user-cog" />
            <h1>Settings</h1>
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