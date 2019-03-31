import React from 'react'

//Styled Components
import {FooterContainer} from './LoginFooterStyles';

export default function LoginFooter() {
  return (
    <div>
        <FooterContainer>
            <span>&copy; ChitChat 2019</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
        </FooterContainer>
    </div>
  )
}
