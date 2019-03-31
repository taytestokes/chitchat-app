import styled from 'styled-components';

export const DashboardNavContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background: grey;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const SignUpBtn = styled.button`
    background-color: ${props => props.theme.primaryGreen};
    border: none;
    border-radius: 5px 5px 5px 5px;
    color: white;
    padding: 15px 38px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    outline: none;
`