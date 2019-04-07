import styled from 'styled-components';

export const DashboardUsersContainer = styled.div`
    width: 94vw;
    height: 100%;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const UsersHeader = styled.div`
    width: 100%;
    height: 10vh;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* border-bottom: 1px solid ${props => props.theme.lightGray}; */
    box-shadow: 3px 1px 5px ${props => props.theme.lightGray};
    `

export const FilterUsers = styled.input.attrs({
    type: 'text',
    placeholder: 'Search for users'

    })`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 25%;
    height: 50%;
    border: none;
    background: ${props => props.theme.lightGray};
    border-radius: 3px 3px 3px 3px;
    font-size: 15px;
    padding-left: 1%;
    margin-left: 1.7%;
    outline: none;
    transition: ease-in-out 0.2s;
    &::placeholder {
        color: '#B9C3DD';
    }
`