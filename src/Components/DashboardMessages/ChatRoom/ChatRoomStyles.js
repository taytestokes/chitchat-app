import styled from 'styled-components';

export const RoomContainer = styled.div`
    width: 61vw;
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
    height: 10.7%;
    background: white;
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    z-index: 2;
`

export const MessageContainerBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Message = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 100%;
    height: auto;
    margin: 2% 1%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    h1 {
        min-width: auto;
        height: auto;
        background: ${props => props.theme.primaryBlue};
        color: white;
        border-radius: 5px 5px 5px 5px;
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
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4.6px 2px 6px 3px ${props => props.theme.lightGray};
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

export const NewMessageInput = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 80%;
    height: 50%;
    border: none;
    border-bottom: 2px solid ${props => props.theme.lightGray};
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