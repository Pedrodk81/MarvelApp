import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
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

export const DetailsCharacters = styled.div<any>`
    max-width: 660px;
    max-height: 439px;
    background: linear-gradient(to right, #FF0000, #400E0E);
    border-radius: 30px;
    display: flex;
    animation: ${fadeIn} 0.5s ease;
    float: ${(p: any) => p.float ? "right" : null}
`;

export const DetailsMoviesAndHqs = styled.div<any>`
    max-width: 660px;
    max-height: 439px;
    background: linear-gradient(to right, #FF0000, #400E0E);
    border-radius: 30px;
    display: flex;
    animation: ${fadeIn} 0.5s ease;
    float: ${(p: any) => p.float ? "right" : null};

    .info {
        padding: 60px 20px 25px !important;
    }
    `;

export const Title = styled.h2`
    font-family: "Axiform";
    font-size: 30px;
    color:#fff;
`;

export const Info = styled.div<any>`
    padding: 70px 20px 25px;
`

export const Apparitions = styled.p`
    font-family: "Axiform";
    font-size: 20px;
    color:#fff;
    text-align: left;
`

export const Description = styled.p`
    font-family: "Axiform Thin";
    font-size: 12px;
    color:#fff;
    text-align: left;
    height: 123px;
`;

export const Movies = styled.p<any>`
    font-family: "Axiform Thin";
    font-size: 18px;
    color:#fff;
    text-align: left;
`

export const RateText = styled.div`
    font-family: "Axiform Regular";
    font-size: 26px;
    color:#fff;
    text-align: left;
    margin-top: 5px;
`

export const Rate = styled.div`
    display: flex;

    * {
        margin-top: 5px;
        margin-right: 8px;
    }
`

export const Close = styled.img<any>`
    cursor: pointer;
    position: relative;
    left: 90%;
    bottom: ${(p: any) => p.characters ? null : "5%"};
    top: ${(p: any) => p.characters ? "15%" : null};
    `

export const DescriptionMovies = styled.div`
    font-family: "Axiform Thin";
    font-size: 12px;
    color:#fff;
    text-align: left;
`

export const AvaibleOn = styled.div`
    font-family: "Axiform Thin";
    font-size: 12px;
    color:#fff;
    text-align: left;
    margin-top: 5px;
`

export const AvaiblesStreaming = styled.img<any>`
    background-color: #fff;
    height: 47px;
    width: 49px;
    border-radius: 9px;
    margin-top: 5px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px
`

export const CloseMovies = styled.div`
    cursor: pointer;
    position: relative;
    right: 100%;
`