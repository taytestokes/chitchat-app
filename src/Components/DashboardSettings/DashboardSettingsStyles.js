import styled from 'styled-components';

export const SettingsContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 94vw;
    height: 100%;
    background: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ProfileContainer = styled.div`
    width: 90%;
    height: 85%;
    background: white;
    border: 1px solid ${props => props.theme.lightGray};
`

export const ProfileHeader = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    h1 {
        font-size: 20px;
        color: #232323;
        letter-spacing: 0.5px;
        font-weight: bold;
        margin-left: 5%;
    }
    span {
        margin-top: 0.5%;
        margin-left: auto;
        margin-right: 5%;
        font-size: 18px;
        color: #CCC;
        transition: linear 0.2s;
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.primaryBlue};
        }
    }
`