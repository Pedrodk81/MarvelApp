import { ReactElement } from "react";
import styled from 'styled-components';

import Logo from "../shared/Logo";
import FormLogin from "../components/FormLogin";

export default function Signin(): ReactElement {
    return (
        <Login>
            <Logo />
            <FormLogin />
        </Login>
    )
}

const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100vh;
    margin-left: 154px;
    margin-top: 8%;

    @media (max-width: 460px) {
        padding: 60px 15px;
        margin: 0;
    }
` ;