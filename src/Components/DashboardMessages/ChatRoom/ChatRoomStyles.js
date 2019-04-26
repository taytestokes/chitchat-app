import styled, { keyframes } from 'styled-components';

//Animations
const slide = keyframes`
     0% {
        opacity: 0.1;
        right: -100vw;
    }
    100% {
        right: 0;
    }
`

export const RoomContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    position: relative;
    width: 60.6vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #2D2D2D;
    animation: ${slide} 0.3s linear;
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
    z-index: 3;
    background: #232323;
    border-bottom: 1px solid black;
`

export const MessageContainerHeaderUser = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h1 {
        font-size: 20px;
        color: #FFF;
        letter-spacing: 0.5px;
        margin-left: 3%;
        font-weight: bold;
    }
    span {
        margin-left: auto;
        margin-right: 3%;
        font-size: 24px;
        color: #CCC;
        &:hover {
            cursor: pointer;
        }
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
        background: transparent;
        border: 2px solid ${props => props.theme.green};
        color: ${props => props.theme.green};
        border-radius: 5px 5px 0px 5px;
        font-size: 16px;
        margin: 0 1.5%;
        padding: 10px;
        max-width: 80%;
        word-wrap: break-word;
    };
`

export const NewMessageContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    background: #232323;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
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
    width: 75%;
    height: 50%;
    border: none;
    border-radius: 3px 3px 3px 3px;
    border-bottom: 2px solid transparent;
    background: rgba(0,0,0,0);
    font-size: 16px;
    color: white;
    caret-color: ${props => props.theme.green};
    outline: none;
    margin-left: 5%;
    transition: ease-in-out 0.3s;
    &::placeholder {
        color: #ccc;
    }
`