import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ConversationsContainer = styled.div`
    width: 33vw;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ConversationFinderContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1.5px solid ${props => props.theme.lightGray};
`

export const ConversationFinder = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 85%;
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

export const ConversationTab = styled(NavLink)`
    width: 100%;
    height: 15%;
    border-bottom: 1.5px solid ${props => props.theme.lightGray};
    &.active{
        
    }
`