import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    width: 94vw;
    height: 100%;
    background: #F8F8F8;
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
    h1 {
        font-size: 20px;
        color: #232323;
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
    background: white;
    margin-top: 3%;
    border: 1px solid ${props => props.theme.lightGray};
`

export const UserContainerHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    span {
        font-size: 14px;
        color: #232323;
    }
`

export const NextBtn = styled.button`
    width: 3%;
    height: 45%;
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
    height: 45%;
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
    height: 10%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.lightGray};
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
        /* background: ${props => props.theme.green}; */
    }
`