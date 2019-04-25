import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    width: 94vw;
    height: 100%;
    background: #373737;
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
    background: #2D2D2D;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #232323;
    z-index: 2;
    h1 {
        font-size: 20px;
        color: #CCC;
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
    border: 1px solid #232323;
    span {
        font-size: 14px;
        color: #CCC;
    }
`

export const NextBtn = styled.button`
    width: 3%;
    height: 40%;
    background: ${props => props.theme.primaryBlue};
    color: white;
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: 5%;
    transition: ease 0.2s;
    &:hover {
        cursor: pointer;
        background: #477bff;
        border: 2px solid #477bff;
    };
    &:active {
        background: rgba(0,0,0,0);
        color: ${props => props.theme.primaryBlue};
    };
`

export const PrevBtn = styled.button`
    width: 3%;
    height: 40%;
    background: ${props => props.theme.primaryBlue};
    color: white;
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: 1%;
    margin-left: auto;
    transition: ease 0.2s;
    &:hover {
        cursor: pointer;
        background: #477bff;
        border: 2px solid #477bff;
    };
    &:active {
        background: rgba(0,0,0,0);
        color: ${props => props.theme.primaryBlue};
    };
`

export const UserCard = styled.div`
    width: 100%;
    height: 13%;
    background: #2D2D2D;
    color: #CCC;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #232323;
    border-left: 1px solid #232323;
    border-right: 1px solid #232323;
    &:hover {
        background: #F8F8F825;
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
    border-radius: 3px 3px 3px 3px;
    color: ${props => props.theme.green};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    transition: ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryBlue};
    }
`