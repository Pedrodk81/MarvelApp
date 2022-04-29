import styled from 'styled-components';

const Section = styled.section<any>`
    margin-top: ${(p: any) => p.detailsCard ? "290px" : "145px"};
`;

export default Section;