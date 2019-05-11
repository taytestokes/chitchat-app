import styled from 'styled-components';

export const MessageDashboard = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 94vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: ${props => props.theme.lightGray};
`

export const PlaceHolder = styled.div`
    width: 60.6vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 75px;
    color: #37373730;
    border-left: 2px solid #F3F3F2;
`