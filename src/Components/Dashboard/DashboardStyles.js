import styled, { keyframes } from 'styled-components';
import plane from '../../assets/plane.png';

//Animations
const bounce = keyframes`
    0% {
        transform: scale(1);
        opacity: .2;
    }
    25% {
        transform: scale(1.1);
        opacity: 1;
    }
    50% {
        transform: scale(1);
        opacity: .2;
    }
    75% {
        transform: scale(1.1);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: .2;
    }
`


//Styled Components
export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const LoadingImage = styled.div`
    background: url(${plane});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 5%;
    height: 20%;
    animation: ${bounce} 3.5s infinite;
`