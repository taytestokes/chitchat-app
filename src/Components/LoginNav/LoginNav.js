import React from 'react'
import logo from '../../assets/logo.png';

//Styled Compnents
import { LoginNavContainer, LoginNavImage } from './LoginNavStyles';

export default function LoginNav() {
    return (
        <div>
            <LoginNavContainer>
                <LoginNavImage src={logo} />
            </LoginNavContainer>
        </div>
    )
}
