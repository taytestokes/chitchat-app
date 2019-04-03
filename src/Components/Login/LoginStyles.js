import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @import url('https://fonts.googleapis.com/css?family=Nunito');    font-family: 'Nunito';
`

export const FieldContainer = styled.div`
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    span {
        font-size: 20px;
        color: ${props => props.theme.primaryBlack};
        margin: 3% 0;
    }
`

export const FieldHeader = styled.h3`
    font-size: 40px;
    color: ${props => props.theme.primaryBlack};
    margin-bottom: 3%;
`

export const InputField = styled.input`
    width: 90%;
    height: 11%;
    border: 1px solid #CCC;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 2%;
    outline: none;
    margin-top: 3%;
`

export const LoginBtn = styled.button`
    width: 60%;
    height: 10%;
    background-color: ${props => props.theme.primaryRed};
    border: 2px solid ${props => props.theme.primaryRed};
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    margin-top: 10%;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryRed};
        background: rgba(0,0,0,0);
    }
`

export const SignUpBtn = styled(NavLink)`
    width: 60%;
    height: 10%;
    background-color: ${props => props.theme.primaryBlue};
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    outline: none;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryBlue};
        background: rgba(0,0,0,0);
    }
`

export const FlashMessage = styled.div`
    width: 90%;
    height: 11%;
    background: #Ef9A9A;
    border: 2px solid #ef5350;
    border-radius: 3px 3px 3px 3px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 18px;
        color: ${props => props.theme.primaryBlack}
    }
`