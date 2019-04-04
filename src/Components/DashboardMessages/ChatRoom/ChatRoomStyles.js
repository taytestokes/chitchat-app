import styled from 'styled-components';

export const RoomContainer = styled.div`
    width: 63vw;
    height: 100vh;
    background: skyblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const MessagesContainer = styled.div`
    height: 90%;
    width: 100%;
    background: #fafafa;
`

export const NewMessageContainer = styled.div`
    width: 100%;
    height: 10%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    span {
        color: ${props => props.theme.primaryBlue};
        font-size: 25px;
        margin-right: 3%;
        &:hover {
            cursor: pointer;
        }
    }
`

export const NewMessageInput = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 80%;
    height: 50%;
    border: none;
    border-radius: 3px 3px 3px 3px;
    font-size: 14px;
    padding-left: 2%;
    outline: none;
    transition: ease-in-out 0.3s;
    &::placeholder {
        color: #ccc;
    }
    &:focus {
        background: rgba(0,0,0,0);
        transform: scale(1.05);
        border: 2px solid ${props => props.theme.lightGray}
    }
`