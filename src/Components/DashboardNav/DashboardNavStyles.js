import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DashboardNavContainer = styled.div`
    width: 6vw;
    height: 100vh;
    background: ${props => props.theme.primaryBlack};
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    height: 20%;
    background: 'orange';
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fafafa;
    font-size: 30px;
    &:active {
        color: ${props => props.theme.primaryBlue};
    };
    &.active {
        color: ${props => props.theme.primaryBlue};
    }
`