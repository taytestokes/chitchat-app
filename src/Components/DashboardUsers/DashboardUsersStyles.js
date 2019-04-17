import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    width: 94vw;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const UsersHeader = styled.div`
    width: 100%;
    height: 10vh;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    z-index: 2;
    `

export const UsersContainer = styled.div`
    width: 95%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const UserCard = styled.div`
    width: 24%;
    height: 45%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1.5% 0;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid ${props => props.theme.lightGray};
    transition: ease-in-out 0.2s;
`

export const MessageButton = styled.button`
    width: 50%;
    height: 10%;
    background-color: ${props => props.theme.green};
    border: 2px solid ${props => props.theme.green};
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.green};
        background: rgba(0,0,0,0);
    }
`