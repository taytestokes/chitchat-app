import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ConversationsContainer = styled.div`
    width: 28vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const ConversationFinderContainer = styled.div`
    width: 100%;
    height: 10%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.lightGray};
    font-size: 24px;
    color: #B9C3DD;
    z-index: 2;
    font-size: 15px;
`

export const ConversationFinder = styled.input.attrs({
    placeholder: 'Search your inbox..'
})`
    width: 70%;
    height: 50%;
    border: none;
    margin-left: 3%;
    font-size: 18px;
    outline: none;
    transition: ease 0.2s;
    &::placeholder {
        color: #B9C3DD;
        font-size: 18px;
    }
`

export const InboxContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: white;
    display: block;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ConversationTab = styled(NavLink)`
    width: 99.9%;
    height: 12%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: white;
    transition: ease-in-out 0.3s;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    &:hover {
        cursor: pointer;
        background: '#FAFAFA';
        transform: scale(1.01);
    };
`