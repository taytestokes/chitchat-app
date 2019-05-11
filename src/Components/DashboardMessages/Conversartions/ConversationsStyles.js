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
    background: white;
`

export const ConversationHeader = styled.div`
    width: 100%;
    height: 11.1%;
    background: white;
    border-bottom: 2px solid #F3F3F2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h1 {
        font-size: 22px;
        margin-left: 10%;
    }
`

export const InboxContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    
`

export const ConversationTab = styled(NavLink)`
    width: 99.9%;
    height: 15%;
    background: white;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: ease-in-out 0.3s;
    z-index: 3;
    border-bottom: 1px solid #F3F3F2;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    };
    &.active {
        background: ${props => props.theme.lightGray};
    };
`