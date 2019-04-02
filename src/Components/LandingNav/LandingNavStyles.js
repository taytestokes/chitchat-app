import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LandingNavContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background: white;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @import url('https://fonts.googleapis.com/css?family=Nunito');    font-family: 'Nunito';
`

export const LandingNavLink = styled(NavLink)`
    background-color: ${props => props.login ? props.theme.primaryRed : props.theme.primaryBlue};
    border: 2px solid ${props => props.login ? props.theme.primaryRed : props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    color: white;
    font-weight: bold;
    padding: 12px ${props => props.login ? '48px' : '38px'};
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 13px;
    outline: none;
    margin-right: 2%;
    transition: ease-in 0.2s;
    &:hover {
        cursor: pointer;
        border: 2px solid ${props => props.login ? props.theme.primaryRed : props.theme.primaryBlue};
        background-color: rgba(0,0,0,0);
        color: ${props => props.login ? props.theme.primaryRed : props.theme.primaryBlue};
    };
`

export const LandingNavImage = styled.img`
    width: 20%;
    height: 90%;
    src: ${props => props.src};
    margin-right: 55%;
`