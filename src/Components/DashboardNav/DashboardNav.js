import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

//Styled Components
import { DashboardNavContainer, DashboardNavLinksContainer, DashboardNavLink, LogoutContainer } from './DashboardNavStyles';

class DashboardNav extends Component {
  render() {
    return (
      <DashboardNavContainer>
        <DashboardNavLinksContainer>
          <DashboardNavLink activeClassName="active" to={`/dashboard/messages`}>
            <FontAwesomeIcon icon="comment-alt" />
            <h1>Messages</h1>
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/users">
            <FontAwesomeIcon icon="users" />
            <h1>Explore</h1>
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/settings">
            <FontAwesomeIcon icon="user-cog" />
            <h1>Settings</h1>
          </DashboardNavLink>
        </DashboardNavLinksContainer>
        <LogoutContainer to="/">
          <FontAwesomeIcon icon="sign-out-alt"/>
          <h1>Logout</h1>
        </LogoutContainer>
      </DashboardNavContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(DashboardNav);