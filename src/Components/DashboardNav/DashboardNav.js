import React, { Component } from 'react'


//Styled Components
import { DashboardNavContainer, NavBtn } from './DashboardNavStyles';

export default class DashboardNav extends Component {
  render() {
    return (
      <DashboardNavContainer>
        <NavBtn login>LOGIN</NavBtn>
        <NavBtn>SIGN UP</NavBtn>
      </DashboardNavContainer>
    )
  }
}