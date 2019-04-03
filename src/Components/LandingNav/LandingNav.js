import React from 'react'
import logo from '../../assets/logo.png';

//Styled Components
import { LandingNavContainer, LandingNavLink, LandingNavImage } from './LandingNavStyles';

export default function LandingNav() {
  return (
      <LandingNavContainer>
          <LandingNavImage src={logo} />
          <LandingNavLink login to="/login">LOGIN</LandingNavLink>
          <LandingNavLink to="/signup">SIGN UP</LandingNavLink>
      </LandingNavContainer>
  )
}