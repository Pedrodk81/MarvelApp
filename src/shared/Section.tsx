import styled from 'styled-components';

const Section = styled.section<any>`
    margin-top: 145px;
    position: ${(p: any) => p.detailsCard ? "relative": null};
    bottom: ${(p: any) => p.detailsCard ? "100%": null};
    width: ${(p: any) => p.detailsCard ? "100vw": null};
    height: ${(p: any) => p.detailsCard ? "100vh": null};
    background-image: url(${(p: any) => p.detailsCard ? "/images/details-card--background.png": null});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 120;
`;

export default Section;