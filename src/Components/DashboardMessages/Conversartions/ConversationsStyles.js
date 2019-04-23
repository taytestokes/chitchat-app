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

export const ConversationFinderContainer = styled.div`
    width: 100%;
    height: 10%;
    background: white;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #B9C3DD;
    z-index: 2;
    font-size: 15px;
    h1 {
        font-size: 20px;
        color: #232323;
        margin-left: 5%;
        font-weight: bold;
    }
`
export const InboxContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: block;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ConversationTab = styled(NavLink)`
    width: 98%;
    height: 15%;
    margin-left: auto;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: ease-in-out 0.3s;
    border-bottom: 1px solid #EFF1F9;
    border-right: 8px solid transparent;
    z-index: 3;
    &:hover {
        cursor: pointer;
    };
    &.active {
        border-right: 8px solid ${props => props.theme.primaryBlue};
    };
`