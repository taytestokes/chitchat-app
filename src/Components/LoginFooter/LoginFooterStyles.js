import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    height: 6vh;
    background: ${props => props.theme.primaryBlack};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @import url('https://fonts.googleapis.com/css?family=Nunito');    font-family: 'Nunito';
    span {
        color: white;
        font-size: 16px;
        margin: 0 3%;
        &:hover {
            cursor: pointer;
        }
    }
`