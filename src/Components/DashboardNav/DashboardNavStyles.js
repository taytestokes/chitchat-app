import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const DashboardNavContainer = styled.div`
    width: 12vw;
    height: 100vh;
    background: ${props => props.theme.primaryBlack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;
    text-decoration: none;
    color: #4A4A4A;
    font-size: 16px;
    font-weight: bold;
    &.active {
        color: white;
        background: #333333;
    }
    &:hover {
        color: white;
    }
    h1 {
        margin-left: 8%;
        text-align: center;
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