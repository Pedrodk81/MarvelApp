import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${fadeIn} 3s ease;
`;


export const Title = styled.h1`
    font-family: Axiform;
    color: #FF0000;
    font-size: 30px;
    margin-top: 38px;
    margin-left: 28px;
`;

export const AccessAccount = styled.p`
    font-family: Axiform Light;
    color: #84848D;
    font-size: 20px;
    margin-left: 28px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    .error-message {
        font-family: Axiform Medium;
        font-size: 15px;
        color: #FF0000; 
        margin-left: 28px;   
    }
`;
export const InputEmail = styled.input`
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 100px;
    width: 383px;
    height: 73px;
    padding: 0 28px;
    font-size: 22px;
    font-family: Axiform Light;

    &::placeholder {
        color: #D1D1D6;
    }
`;

export const InputPassword = styled.input`
    border: none;
    border-radius: 100px;
    width: 383px;
    height: 73px;
    padding: 0 28px;
    font-size: 22px;
    font-family: Axiform Light;

    &::placeholder {
        color: #D1D1D6;
    }
`;

export const FormOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding: 0px 10px;

    .save-login, .forgot-password {
        font-family: Axiform Medium;
        font-size: 15px;
        color: #84848D;
    }

    .forgot-password {
        border-bottom: solid 1px #FF0000;
    }
`;

export const NoAccount = styled.p`
    font-family: Axiform Medium;
    font-size: 15px;
    color: #84848D; 
    align-self: center;

    a {
        color: #FF0000;  
    }
`;

export const ButtonSubmit = styled.button`
    border: none;
    border-radius: 33px;
    font-family: Axiform Medium;
    font-size: 28px;
    height: 73px;
    width: 439px;
    background-color: #FF0000;
    color: #FFFFFF;
    margin: 23px 0px;
    cursor: pointer;
`;
