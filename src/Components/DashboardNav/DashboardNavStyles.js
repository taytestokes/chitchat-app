import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardNavContainer = styled.div`
    width: 12vw;
    height: 100vh;
    background: ${props => props.theme.primaryBlack};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const DashboardNavLinksContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const DashboardNavLink = styled(NavLink)`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;
    text-decoration: none;
    color: ${props => props.theme.secondaryBlack};
    font-size: 16px;
    font-weight: bold;
    transition: linear 0.2s;
    &.active {
        color: white;
    }
    h1 {
        margin-left: 8%;
        text-align: center;
    }
`