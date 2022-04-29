import styled from 'styled-components';

const Container = styled.div<any>`
    max-width: var(--container-lg);
    margin: auto;
    
    @media (max-width: 720px) {
        max-width: var(--container-sm);
    }

    @media (max-width: 460px) {
        max-width: var(--container-xs);
    }

`;

export default Container;


// display: ${(p: any) => p.detailsCard ? "flex": null};
// align-items: ${(p: any) => p.detailsCard ? "center": null};
// height: ${(p: any) => p.detailsCard ? "100vh": null};
// padding-top: ${(p: any) => p.detailsCard ? "80px": null};
// justify-content: ${(p: any) => p.justifyContent };