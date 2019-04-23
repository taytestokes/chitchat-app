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

export const ConversationFinderContainer = styled.div`
    width: 100%;
    height: 10%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    color: #B9C3DD;
    z-index: 2;
    font-size: 15px;
    h1 {
        font-size: 18px;
        color: #232323;
        margin-left: 5%;
        font-weight: bold;
        width: 30%;
    }
    span {
        height: 40%;
        width: 10%;
        border-radius: 2px 2px 2px 2px;
        background: ${props => props.theme.green};
        color: white;
        margin-left: auto;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    }
`

export const InboxContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: #F1F3F750;
    display: block;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ConversationTab = styled(NavLink)`
    width: 100%;
    height: 12%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: ease-in-out 0.3s;
    &:hover {
        cursor: pointer;
    };
    &.active {
        background: #92969D15;
    };
`