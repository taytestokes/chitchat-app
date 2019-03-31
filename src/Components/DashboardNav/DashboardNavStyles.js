import styled from 'styled-components';

export const DashboardNavContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background: ${props => props.theme.primaryBlack};
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const NavBtn = styled.button`
    background-color: ${props => props.theme.primaryRed};
    border: 2px solid ${props => props.theme.primaryRed};
    border-radius: 5px 5px 5px 5px;
    color: white;
    font-weight: bold;
    padding: 12px ${props => props.login ? '48px' : '38px'};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    outline: none;
    margin-right: 3%;
    transition: ease-in 0.2s;
    &:hover {
        cursor: pointer;
        border: 2px solid ${props => props.theme.primaryRed};
        background-color: rgba(0,0,0,0);
        color: ${props => props.theme.primaryRed};
    };
`