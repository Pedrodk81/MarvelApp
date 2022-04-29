import styled, { keyframes } from 'styled-components';

export const Navbar = styled.nav`
    background-color: var(--background-color-nav);
    height: 114px;
`;

export const RowNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 114px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
`

export const Item = styled.li`
    span {
        font-family: Axiform;
        color: #84848D;
        font-size: 30px;
        transition: color 0.1s ease-in;
        margin-right: 85px;
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
`;

export const SessionActions = styled.div`
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
`;