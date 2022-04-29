import { ReactElement } from "react";
import styled from 'styled-components';

import Logo from "../shared/Logo";
import FormLogin from "../components/FormLogin";

export default function Signin(): ReactElement {
    return (
        <Wrapper>
            <Login>
                <Logo />
                <FormLogin />
            </Login>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
` ;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100vh;
    margin-left: 154px;
    justify-content: center;

    @media (max-width: 460px) {
        margin-left: 0;
    }
` ;
