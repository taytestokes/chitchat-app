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

export const SearchInput = styled.div`
    width: 15%;
    height: 45%;
`

export const UsersContainer = styled.div`
    width: 90%;
    height: 77vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const UserSubHeader = styled.div`
    width: 100%;
    height: 10vh;
    background:  #f1f3f6;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
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
    transition: ease 0.2s;
    &:hover {
        cursor: pointer;
    };
    &:active {
        background: rgba(0,0,0,0);
        color: ${props => props.theme.primaryBlue};
    };
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
    border-radius: 4px 4px 4px 4px;
    border: 1px solid ${props => props.theme.lightGray};
    transition: ease-in-out 0.2s;
    &:hover {
        transform: scale(1.02);
    }
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