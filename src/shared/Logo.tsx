
import { ReactElement } from "react";

import styled, { keyframes } from 'styled-components';

export default function Logo({navLogo} : { navLogo?: boolean }): ReactElement {
    return (
        <Brand navLogo={navLogo}>
            <span>
                Marvel
            </span>
        </Brand>
    )
}

const moveLogo = keyframes`
    0% {
        top: 30%;
        left: 140%;
    }
    50% {
        top: 30%;
        left: 0%;
    }
    100% {
        top: 0%;
    }
`; 

const Brand = styled.div<any>`
    background-color: #FF0000;
    width: ${(p: any) => p.navLogo ? "122px" : "237px" };
    height: ${(p: any) => p.navLogo ? "54px" : "95px" };
    padding-top: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-self: center;
    animation: ${(p: any) => p.navLogo ? null : moveLogo } 3s ease;
    cursor: pointer;

    span {
        color: white;
        font-family: Marvel;
        text-transform: uppercase;
        font-size: ${(p: any) => p.navLogo ? "52px" : "100px" };
    }
`;
