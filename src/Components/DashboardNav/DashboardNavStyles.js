import styled, { keyframes } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

//Animations
const slide = keyframes`
    0% {
        left: -50vw;
    }
    100% {
        left: 0;
    }
`

export const DashboardNavContainer = styled.div`
    width: 12vw;
    height: 100vh;
    background: #232323;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const ImageContainer = styled.div`
    width: 75%;
    height: 8%;
    margin-top: 10%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border:1px solid ${props => props.theme.lightGray};
        transition: linear 0.2s;
        &:hover {
            cursor: pointer;
            border: 3px solid ${props => props.theme.lightGray};
        }
    }
`

export const DashboardNavLinksContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10%;
`

export const DashboardNavLink = styled(NavLink)`
    width: 75%;
    height: 25%;
    border-radius: 4px 0 0 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #A9A9A9;
    font-size: 14px;
    font-weight: bold;
    margin-left: auto;
    border-right: 5px solid transparent;
    padding-left: 6%;
    transition: ease 0.2s;
    &:hover{
        color: ${props => props.theme.green};
    }
    &.active {
        color: ${props => props.theme.green};
        background: #F8F8F815;
        border-right: 5px solid ${props => props.theme.green};
        h1 {
            color: ${props => props.theme.green};
        }
        width: 80%;
    }
    h1 {
        text-align: center;
        margin-left: 8%;
        letter-spacing: 0.5px;
    }
`

export const LogoutContainer = styled(Link)`
    width: 75%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30%;
    font-size: 14px;
    font-weight: bold;
    color: #A9A9A9;
    text-decoration: none;
    transition: ease-in-out 0.1s;
    margin-top: auto;
    margin-bottom: 5%;
    h1 {
        margin-left: 8%;
    };
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.green};
    }
`

// --- Slide Out Menu --- //
export const SettingsMenuBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.8);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
`

export const SettingsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 20%;
    height: 100%;
    background: #232323;
    box-shadow: 0 0 15px 2px #23232320;
    animation: ${slide} 0.25s linear;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const PictureContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 1px solid #232323;
    }
`

export const UserInfoContainer = styled.div`
    width: 75%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
        font-size: 16px;
        color: #CCC;
        font-weight: bold;
        margin-top: 10%;
    }
    div {
        width: 100%;
        height: 10%;
        border: none;
        border-radius: 2px 2px 2px 2px;
        outline: none;
        color: white;
        font-size: 16px;
        margin-top: 2%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    input {
        width: 100%;
        height: 9%;
        background: transparent;
        border: none;
        border-bottom: 1px solid ${props => props.theme.green};
        border-radius: 2px 2px 2px 2px;
        outline: none;
        color: white;
        font-size: 16px;
        margin-top: 2%;
        caret-color: ${props => props.theme.green};
    }
    button {
        width: 32%;
        height: 8%;
        color: white;
        background: ${props => props.theme.green};
        border: 1px solid ${props => props.theme.green};
        border-radius: 2px 2px 2px 2px;
        outline: none;
        transition: ease-in 0.2s;
        margin-top: 10%;
        font-size: 16px;
        &:hover {
            background: transparent;
            color: ${props => props.theme.green};
            cursor: pointer;
        }
    }
`

export const EditContainer = styled.div`
    width: 75%;
    height: 5%;
    margin-top: auto;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.green};
    font-size: 24px;
    font-weight: bold;
    & :hover{
        cursor: pointer;
        transform: scale(1.03);
    }
    .edit {
        font-size: 18px;
        color: #CCC;
        transition: linear 0.3s;
        &:hover {
            color: ${props => props.theme.primaryBlue};
        }
    }
`