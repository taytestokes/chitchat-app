import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styled Components
import { DashboardNavContainer, DashboardNavLinksContainer, DashboardNavLink } from './DashboardNavStyles';

export default class DashboardNav extends Component {
  render() {
    return (
        <DashboardNavContainer>
          <DashboardNavLinksContainer>
            <DashboardNavLink activeClassName="active" to="/dashboard/messages">
              <FontAwesomeIcon icon="comment-alt"/>
            </DashboardNavLink>
            <DashboardNavLink activeClassName="active" to="/dashboard/users">
              <FontAwesomeIcon  icon="users"/>
            </DashboardNavLink>
          </DashboardNavLinksContainer>
        </DashboardNavContainer>
    )
  }
}