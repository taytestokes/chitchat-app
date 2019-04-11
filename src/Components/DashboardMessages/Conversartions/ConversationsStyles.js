import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ConversationsContainer = styled.div`
    width: 33vw;
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
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    z-index: 2;
`

export const ConversationFinder = styled.input`
    width: 35%;
    height: 50%;
    border: none;
    background: ${props => props.theme.lightGray};
    border-radius: 3px 3px 3px 3px;
    font-size: 15px;
    padding-left: 2%;
    outline: none;
    &::placeholder {
        color: '#B9C3DD';
    }
`

export const InboxContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: block;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-top: 5%;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ConversationTab = styled(NavLink)`
    width: 90%;
    height: 12%;
    display: flex;
    background: white;
    border-radius: 3px 3px 3px 3px;
    transition: ease-in-out 0.3s;
    margin: 2% 5%;
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    &:hover {
        cursor: pointer;
        background: '#FAFAFA';
        transform: scale(1.01);
    };
    &.active{
        transform: scale(1.05);
        box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
        margin-left: 7%;
        border-left: 5px solid ${props => props.theme.green};
        width: 88%;
    };
`