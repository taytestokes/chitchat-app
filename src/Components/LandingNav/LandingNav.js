import React from 'react'

//Styled Components
import {LandingNavContainer, LandingNavBtn} from './LandingNavStyles';

export default function LandingNav() {
  return (
    <div>
      <LandingNavContainer>
        <LandingNavBtn login>LOGIN</LandingNavBtn>
        <LandingNavBtn>SIGN UP</LandingNavBtn>
      </LandingNavContainer>
    </div>
  )
}