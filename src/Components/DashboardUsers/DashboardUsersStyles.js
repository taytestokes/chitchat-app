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
    width: 90%;
    height: 77vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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

export const SearchInput = styled.input.attrs({
    placeholder: 'Search for a user..'
})`
    width: 19.5%;
    height: 43%;
    background: white;
    border: 1px solid ${props => props.theme.lightGray};
    outline: none;
    border-radius: 2px 2px 2px 2px;
    margin-left: 7%;
    font-size: 16px;
    padding-left: 0.5%;
    &::placeholder {
        color: #B9C3DD;
    }
`

export const SearchBtn = styled.button`
    width: 3%;
    height: 45%;
    background: ${props => props.theme.primaryBlue};
    color: white;
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: auto;
    margin-left: 1%;
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

export const NextBtn = styled.button`
    width: 3%;
    height: 45%;
    background: ${props => props.theme.primaryBlue};
    color: white;
    border: 2px solid ${props => props.theme.primaryBlue};
    border-radius: 3px 3px 3px 3px;
    outline: none;
    font-size: 20px;
    margin-right: 8%;
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
    width: 22%;
    height: 45%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1.5% 0;
    margin-left: 2%;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid ${props => props.theme.lightGray};
    transition: ease-in-out 0.2s;
    img {
        width: 45%;
        height: 40%;
        border-radius: 50%;
        margin-top: 13%;
        border: 1px solid ${props => props.theme.lightGray};
    }
`

export const UserCardInfo = styled.div`
    width: 80%;
    height: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    div {
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        h1 {
            font-size: 16px;
            color: #232323;
        }
        h2 {
            font-size: 13px;
            color: ${props => props.theme.lightGray};
            margin-top: 10%;
        }
    }
`

export const MessageButton = styled.button`
    width: 40%;
    height: 35%;
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