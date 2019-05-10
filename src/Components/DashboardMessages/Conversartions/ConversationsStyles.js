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
    border-right: 1px solid ${props => props.theme.lightGray};
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
    width: 99%;
    height: 12%;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: ease-in-out 0.3s;
    z-index: 3;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    border-right: 5px solid transparent;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    };
    &.active {
        background: #20E89A15;
        border-right: 5px solid ${props => props.theme.green};
    };
`