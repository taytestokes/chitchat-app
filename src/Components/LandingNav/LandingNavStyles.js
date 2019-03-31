import styled from 'styled-components';

export const LandingNavContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background: white;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const LandingNavBtn = styled.button`
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
    margin-right: 2%;
    transition: ease-in 0.2s;
    &:hover {
        cursor: pointer;
        border: 2px solid ${props => props.theme.primaryRed};
        background-color: rgba(0,0,0,0);
        color: ${props => props.theme.primaryRed};
    };
`

export const LandingNavImage = styled.img`
    width: 20%;
    height: 90%;
    src: ${props => props.src};
    margin-right: 55%;
`