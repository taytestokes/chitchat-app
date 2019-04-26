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
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }
`

export const InfoContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    text-decoration: none;
    h1 {
        font-size: 18px;
        color: white;
    }
    h2 {
        font-size: 16px;
        color: white;
    }
    h3 {
        font-size: 14px;
        color: #CCC;
    }
`

export const DateContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #CCC;
    text-decoration: none;
`