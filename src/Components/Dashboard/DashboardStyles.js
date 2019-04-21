import styled, { keyframes } from 'styled-components';
import plane from '../../assets/plane.png';

//Animations
const bounce = keyframes`
    0% {
        transform: scale(1)
    }
    25% {
        transform: scale(1.1)
    }
    50% {
        transform: scale(1)
    }
    75% {
        transform: scale(1.1)
    }
    100% {
        transform: scale(1);
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
    width: 8%;
    height: 18%;
    animation: ${bounce} 2s infinite;
`