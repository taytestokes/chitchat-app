import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const DashboardNavContainer = styled.div`
    width: 12vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid ${props => props.theme.lightGray};
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const DashboardNavLinksContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const DashboardNavLink = styled(NavLink)`
    width: 80%;
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
    &.active {
        color: ${props => props.theme.primaryBlue};
        background: #2b60e415;
        border-right: 5px solid ${props => props.theme.primaryBlue};
        h1 {
            color: black;
        }
    }
    h1 {
        text-align: center;
        margin-left: 8%;
        letter-spacing: 0.5px;
    }
`

export const LogoutContainer = styled(Link)`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;
    font-size: 16px;
    font-weight: bold;
    color: #4A4A4A;
    text-decoration: none;
    transition: ease-in-out 0.1s;
    h1 {
        margin-left: 8%;
    };
    &:hover {
        cursor: pointer;
        color: white;
    }
`