import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    position: relative;
    width: 94vw;
    height: 100%;
    background: #FAFAFA;
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
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    z-index: 2;
    `

export const FilterUsers = styled.input.attrs({
    type: 'text',
    placeholder: 'Search for users'

})`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 25%;
    height: 50%;
    border: none;
    background: ${props => props.theme.lightGray};
    border-radius: 3px 3px 3px 3px;
    font-size: 15px;
    padding-left: 1%;
    margin-left: 1.7%;
    outline: none;
    transition: ease-in-out 0.2s;
    &::placeholder {
        color: '#B9C3DD';
    }
`

export const UserSubHeader = styled.div`
    width: 80%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 14px;
    font-weight: bold;
    padding-left: 2%;
    color: #8F92A0;
    h1 {
        margin-left: 1%;
        font-size: 12px;
    }
`

export const UsersContainer = styled.div`
    width: 85%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const UserCard = styled.div`
    width: 20%;
    height: 55%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 2%;
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    border-radius: 2px 2px 2px 2px;
    transition: ease-in-out 0.2s;
    &:hover {
        margin-top: 1.5%;
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

export const MessageModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const MessageModal = styled.div`
    width: 45%;
    height: 65%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 15%;
    border-bottom: 2px solid ${props => props.theme.lightGray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1{
        margin-left: 10%;
        font-size: 16px;
        color: #D3D3D3;
        &:hover{
            cursor: default;
        }
    }
`

export const CancelModalBtn = styled.button`
    width: 15%;
    height: 35%;
    border: 1px solid ${props => props.theme.primaryBlue};
    outline: none;
    color: ${props => props.theme.primaryBlue};
    font-size: 16px;
    margin-right: 10%;
    &:hover {
        background: ${props => props.theme.primaryBlue};
        color: white;
        cursor: pointer;
    }
`

export const ModalMessageInput = styled.textarea.attrs({
    placeholder: 'Type a new message...'
})`
    width: 80%;
    height: 60%;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 2px 2px 2px 2px;
    outline: none;
    margin-top: 5%;
    font-size: 16px;
    padding-left: 2%;
    padding-top: 2%;
    &::placeholder{
        font-size: 16px;
        color: #D3D3D3;
    }
`

export const SendMessageModalBtn = styled.button`
    width: 20%;
    height: 6%;
    background-color: ${props => props.theme.green};
    border: 2px solid ${props => props.theme.green};
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    outline: none;
    margin-right: auto;
    margin-left: 9%;
    margin-top: 5%;
    transition: ease-in-out 0.2s;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.green};
        background: rgba(0,0,0,0);
    }
`