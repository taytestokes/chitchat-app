import styled from 'styled-components';

export const ConversationTab = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`

export const ImageContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid black;
    }
`

export const InfoContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    text-decoration: none;
    h1 {
        font-size: 20px;
        color: white;
        margin-top: 6%;
        margin-bottom: 5%;
        max-width: 100%;
        text-overflow: ellipsis;
    }
    h2 {
        font-size: 14px;
        color: #A9A9A9;
        max-width: 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 25%;
    }
`

export const DateContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    h1{
        font-size: 12px;
        color: #A9A9A9;
        margin-right: 25%;
        margin-top: 3%;
    }
`