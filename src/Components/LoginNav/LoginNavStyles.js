import styled from 'styled-components';

export const LoginNavContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background: white;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
`

export const LoginNavImage = styled.img`
    width: 20%;
    height: 90%;
    src: ${props => props.src};
    margin-right: 50%;
`