import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

//Styled Components
import { DashboardNavContainer, DashboardNavLinksContainer, DashboardNavLink } from './DashboardNavStyles';

class DashboardNav extends Component {
  render() {
    return (
      <DashboardNavContainer>
        <DashboardNavLinksContainer>
          <DashboardNavLink activeClassName="active" to={`/dashboard/messages`}>
            <FontAwesomeIcon icon="comment-alt" />
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/users">
            <FontAwesomeIcon icon="users" />
          </DashboardNavLink>
          <DashboardNavLink activeClassName="active" to="/dashboard/settings">
            <FontAwesomeIcon icon="user-cog" />
          </DashboardNavLink>
        </DashboardNavLinksContainer>
      </DashboardNavContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(DashboardNav);