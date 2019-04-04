import styled from 'styled-components';

export const ConversationsContainer = styled.div`
    width: 33vw;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ConversationFinder = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 90%;
    height: 6%;
    border: none;
    background: ${props => props.theme.lightGray};
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 5%;
    outline: none;
    margin-top: 5%;
    &::placeholder {
        color: #ccc;
    }
`