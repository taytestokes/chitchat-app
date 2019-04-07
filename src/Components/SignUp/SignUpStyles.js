import styled from 'styled-components';

export const SignUpContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`
export const SignUpForm = styled.div`
    width: 45%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const SignUpFormHeader = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.primaryBlack};
    margin-top: 10%;
`

export const UsernameInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Username'
    })`
    width: 75%;
    height: 10%;
    border: 1px solid #CCC;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 1%;
    outline: none;
    margin-top: 5%;
`
export const PasswordInput = styled.input.attrs({
    type: 'password',
    placeholder: 'Password'
    })`
    width: 75%;
    height: 10%;
    border: 1px solid #CCC;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 1%;
    outline: none;
    margin-top: 2%;
`

export const EmailInput = styled.input.attrs({
    type: 'email',
    placeholder: 'Email'
    })`
    width: 75%;
    height: 10%;
    border: 1px solid #CCC;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 1%;
    outline: none;
    margin-top: 2%;
`
export const SignUpBtn = styled.button`
    width: 50%;
    height: 10%;
    background-color: ${props => props.theme.primaryBlue};
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    margin-top: 5%;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryBlue};
        background: rgba(0,0,0,0);
    }
`

export const ErrorMessage = styled.div`
    width: 90%;
    height: 8%;
    background: #Ef9A9A;
    border: 2px solid #ef5350;
    border-radius: 3px 3px 3px 3px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 18px;
        color: ${props => props.theme.primaryBlack}
    }
`