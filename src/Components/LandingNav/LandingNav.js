import React from 'react'
import logo from '../../assets/logo.png';

//Styled Components
import { LandingNavContainer, LandingNavBtn, LandingNavImage } from './LandingNavStyles';

export default function LandingNav() {
  return (
    <div>
      <LandingNavContainer>
          <LandingNavImage src={logo} />
          <LandingNavBtn login>LOGIN</LandingNavBtn>
          <LandingNavBtn>SIGN UP</LandingNavBtn>
      </LandingNavContainer>
    </div>
  )
}