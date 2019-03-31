import React, { Component } from 'react'


//Styled Components
import { DashboardNavContainer, SignUpBtn } from './DashboardNavStyles';

export default class DashboardNav extends Component {
  render() {
    return (
      <DashboardNavContainer>
        <SignUpBtn>Sign Up</SignUpBtn>
      </DashboardNavContainer>
    )
  }
}
