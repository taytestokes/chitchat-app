import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    width: 94vw;
    height: 100%;
    background: ${props => props.theme.lightGray};
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
    background: #232323;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    z-index: 2;
    h1 {
        font-size: 20px;
        color: #FFF;
        margin-left: 5%;
        font-weight: bold;
    }
`

export const UsersContainer = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
    margin-top: 3%;
`

export const UserContainerHeader = styled.div`
    width: 100%;
    height: 8%;
    background: #232323;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    span {
        font-size: 14px;
        color: #FFF;
    }
`

export const NextBtn = styled.button`
    width: 2.5%;
    height: 35%;
    background: transparent;
    color: ${props => props.theme.green};
    border: 1px solid ${props => props.theme.green};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: 5%;
    transition: ease 0.2s;
    &:hover {
        cursor: pointer;
    };
    &:active {
        background: ${props => props.theme.green};
        color: #232323;
    };
`

export const PrevBtn = styled.button`
    width: 2.5%;
    height: 35%;
    background: transparent;
    color: ${props => props.theme.green};
    border: 1px solid ${props => props.theme.green};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: 1%;
    margin-left: auto;
    transition: ease 0.2s;
    &:hover {
        cursor: pointer;
    };
    &:active {
        background: ${props => props.theme.green};
        color: #232323;
    };
`

export const UserCard = styled.div`
    width: 100%;
    height: 13%;
    background: #373737;
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    &:hover {
        background: #F1F1F125;
    }
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #232323;
        margin-right: 4%;
    }
    span {
            width: 22%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
    }
`

export const MessageButton = styled.button`
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.green};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`