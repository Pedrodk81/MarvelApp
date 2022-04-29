import styled, {keyframes} from 'styled-components';

const openNavBar = keyframes`
    0% {
        width: 0;
        opacity: 0;
    }
    100% {
        width: 100%;
        opacity: 1;
    }
`
    
export const Aside = styled.aside`
    height: 100%;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0; 
    right: 0;
    background-color: #ff0000;
    overflow-x: hidden;
    padding-top: 10px;
    transition: 0.5s;
    animation: ${openNavBar} 0.3s ease;
`;

export const Navbar = styled.nav`
    background-color: var(--background-color-nav);
    height: 114px;

    @media (max-width: 720px) {
        padding: 0px 15px;
    }
`;

export const Menu = styled.img<any>`
    display: none;
    height: 58px;
    cursor: pointer;

    @media (max-width: 720px) {
        display: block;
    }
`;

export const RowNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 114px;
`;

export const List = styled.ul<any>`
    display: flex;
    align-items: center;
    flex-direction: ${(p: any) => p.mobile ? "column" : "row"};
`

export const Item = styled.li<any>`
    border-bottom: ${(p: any) => p.mobile ? "1px solid white" : null};
    width: 100%;
    text-align: center;

    span {
        font-family: Axiform;
        color: #84848D;
        font-size: 30px;
        transition: color 0.1s ease-in;
        margin-right: ${(p: any) => p.mobile ? null : "85px"};
        cursor: pointer;

        &:hover, &.active {
            color: #ffffff;
        }
    }  
`;

export const RightInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 114px;

    @media (max-width: 720px) {
        display: none;
    }
`;

export const SessionActions = styled.div<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 114px;
    
    span {
        font-family: Axiform Light;
        color: #84848D;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            color: #ffffff; 
        }
    }

    @media (max-width: 720px) {
        padding: 0px 15px;
    }
`;