import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 84vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @import url('https://fonts.googleapis.com/css?family=Nunito');    font-family: 'Nunito';
`

export const FieldContainer = styled.div`
    width: 35%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    span {
        font-size: 20px;
        color: ${props => props.theme.primaryBlack};
        margin: 3% 0;
    }
`

export const FieldHeader = styled.h3`
    font-size: 40px;
    color: ${props => props.theme.primaryBlack};
`

export const InputField = styled.input`
    width: 90%;
    height: 12%;
    border: 1px solid #ccc;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    padding-left: 2%;
    outline: none;
    margin-top: 4%;
`

export const LoginBtn = styled.button`
    width: 60%;
    height: 10%;
    background-color: ${props => props.theme.primaryRed};
    border: none;
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    margin-top: 10%;
    &:hover {
        cursor: pointer;
    }
`

export const SignUpBtn = styled.button`
    width: 60%;
    height: 10%;
    background-color: ${props => props.theme.primaryBlue};
    border: none;
    border-radius: 3px 3px 3px 3px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`