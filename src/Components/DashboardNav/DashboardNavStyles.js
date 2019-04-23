import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const DashboardNavContainer = styled.div`
    width: 12vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid ${props => props.theme.lightGray};
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const NavLogo = styled.img.attrs({
    src: logo
})`
    height: 8%;
    width: 40%;
    margin: 10% auto;
`

export const DashboardNavLinksContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10%;
`

export const DashboardNavLink = styled(NavLink)`
    width: 75%;
    height: 25%;
    border-radius: 4px 0 0 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #A9A9A9;
    font-size: 14px;
    font-weight: bold;
    margin-left: auto;
    border-right: 5px solid white;
    padding-left: 6%;
    transition: ease 0.2s;
    &.active {
        color: ${props => props.theme.primaryBlue};
        background: #2b60e415;
        border-right: 5px solid ${props => props.theme.primaryBlue};
        h1 {
            color: black;
        }
        width: 80%;
    }
    h1 {
        text-align: center;
        margin-left: 8%;
        letter-spacing: 0.5px;
    }
`

export const LogoutContainer = styled(Link)`
    width: 75%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;
    font-size: 14px;
    font-weight: bold;
    color: #A9A9A9;
    text-decoration: none;
    transition: ease-in-out 0.1s;
    margin-top: auto;
    h1 {
        margin-left: 8%;
    };
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.green};
    }
`