import { useState } from "react";
import { ReactElement } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { DESTROY_SESSION } from "../../store/sessionSlice";

import { Aside, Navbar, Menu, RowNav, List, Item, RightInfo, SessionActions } from "./styles";
import Container from "../../shared/Container";
import Logo from "../../shared/Logo";

import menuIcon from "../../assets/menu.svg";
import avatarIcon from "../../assets/avatar.svg";
import closeIcon from "../../assets/close.svg";

export default function Nav(): ReactElement {
    const [openAsideNav, setOpenAsideNav] = useState<boolean>(false)
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(DESTROY_SESSION());

        return <Navigate to="/signin" />
    }
    
    return (
        <Navbar>
            <Container>
                <RowNav>
                    <Logo navLogo={true} />
                    <RightInfo>
                        <List>
                            <Item>
                                <Link to="/characters">
                                    <span className={pathname == "/characters" ? "active" : ""}>Personagens</span>    
                                </Link>
                            </Item>
                            <Item>
                                <Link to="/movies">
                                    <span className={pathname == "/movies" ? "active" : ""}>Filmes</span>    
                                </Link>
                            </Item>
                            <Item>
                                <Link to="/hqs">
                                    <span className={pathname == "/hqs" ? "active" : ""}>HQs</span>    
                                </Link>
                            </Item>
                        </List>
                        <SessionActions>
                            <img src={avatarIcon} alt="Eu" />
                            <span onClick={() => logout()}>
                                Sair
                            </span>
                        </SessionActions>
                    </RightInfo>
                    <Menu src={menuIcon} alt="Menu" onClick={() => setOpenAsideNav(true)} />
                    {openAsideNav && <AsideNav logout={logout} pathname={pathname} onClose={() => setOpenAsideNav(false)} />}      
                </RowNav>
            </Container>
        </Navbar>
    )
}

function AsideNav({logout, onClose, pathname}: {logout: VoidFunction, onClose: VoidFunction, pathname: string}): ReactElement {
    return(
        <Aside>
            <SessionActions mobile={true}>
                <img src={avatarIcon} alt="Eu" />
                <span onClick={() => logout()}>
                    Sair
                </span>
                <img src={closeIcon} alt="Fechar" onClick={onClose} />
            </SessionActions>
            <List mobile={true}>
                <Item mobile={true}>
                    <Link to="/characters">
                        <span className={pathname == "/characters" ? "active" : ""}>Personagens</span>    
                    </Link>
                </Item>
                <Item  mobile={true}>
                    <Link to="/movies">
                        <span className={pathname == "/movies" ? "active" : ""}>Filmes</span>    
                    </Link>
                </Item>
                <Item  mobile={true}>
                    <Link to="/hqs">
                        <span className={pathname == "/hqs" ? "active" : ""}>HQs</span>    
                    </Link>
                </Item>
            </List>
        </Aside>
    )
}