import styled, { keyframes } from 'styled-components';

//Animations
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const RoomContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 60.5vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const MessagesContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const MessageContainerHeader = styled.div`
    width: 100%;
    height: 11.1%;
    background: white;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    z-index: 3;
`

export const MessageContainerHeaderUser = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 5%;
        border: 1px solid ${props => props.theme.lightGray};
    }
    span {
        margin-left: auto;
        margin-right: 3%;
        margin-top: 1.5%;
        font-size: 24px;
        color: ${props => props.theme.lightGray};
        &:hover {
            cursor: pointer;
        }
    }
`

export const HeaderUser = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1 {
        font-size: 16px;
        color: #232323;
        margin-top: 1%;
        margin-left: 5%;
        font-weight: bold;
    }
    h2 {
        font-size: 14px;
        color: ${props => props.theme.lightGray};
        margin-top: 3%;
        margin-left: 5%;
    }
`

export const MessageContainerBody = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Message = styled.div`
    width: 100%;
    height: auto;
    margin: 2% 1%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    h1 {
        color: #B9C3DD;
        font-size: 12px;
        align-self: flex-start;
        margin-top: 5px;
    };
    h2 {
        min-width: auto;
        height: auto;
        background: ${props => props.theme.primaryBlue};
        color: white;
        border-radius: 5px 5px 5px 5px;
        font-size: 18px;
        margin: 0 1.5%;
        padding: 10px;
        max-width: 80%;
        word-wrap: break-word;
    };
`

export const NewMessageContainer = styled.div`
    width: 100%;
    height: 10%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${props => props.theme.lightGray};
    span {
        color: ${props => props.theme.green};
        font-size: 28px;
        margin-right: 5%;
        transition: ease-in-out 0.2s;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

export const NewMessageInput = styled.input.attrs({
    placeholder: 'Type a new message..'
})`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 80%;
    height: 50%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    border-radius: 3px 3px 3px 3px;
    font-size: 14px;
    padding-left: 2%;
    outline: none;
    transition: ease-in-out 0.3s;
    margin-left: 4%;
    &::placeholder {
        color: #ccc;
    }
    &:focus {
        background: rgba(0,0,0,0);
        transform: scale(1.05);
        font-size: 16px;
        padding-left: 0;
    }
`