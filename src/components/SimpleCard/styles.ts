import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
        bottom: 20px;

    }
    100% {
        opacity: 1;
        bottom: 0;

    }
`;

export const Cards = styled.div<any>`
    padding: 0px 23px;
`;

export const Card = styled.div<any>`
    max-width: 290px;
    height: 439px;
    margin-right: 77px;
    background-image: url('${(p: any) => p.image }');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex !important;
    animation: ${fadeIn} 0.5s ease;
    cursor: pointer;
    position: relative;
`;

export const Info = styled.div`
    max-height: 234px;
    background-color: linear;
    border-radius: 30px;    
    text-align: center;
    align-self: flex-end;
    padding: 28px 23px 16px;
    background: linear-gradient(rgb(255, 0 , 0), rgba(64, 14 , 14, 0.5));

    * {
        margin-bottom: 5px;
    }
`;

export const Title = styled.h2`
    font-family: "Axiform";
    font-size: 20px;
    color:#fff;
`;

export const Description = styled.p`
    font-family: "Axiform Thin";
    font-size: 12px;
    color:#fff;
    text-align: left;
    height: 123px;
`;

export const Details = styled.a`
    font-family: "Axiform Thin";
    font-size: 20px;
    color:#fff;
    cursor: pointer;
`;

export const Button = styled.button`
    background: none;
    border: none;
    position: relative;
    z-index: 20;
    animation: ${fadeIn} 0.5s ease;

    &.prev-arrow {
        top: 219px;
        right: 70px;
    }

    &.next-arrow {
        bottom: 255px;
        left: 980px;
    }

`;