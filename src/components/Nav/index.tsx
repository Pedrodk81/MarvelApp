import { ReactElement } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { DESTROY_SESSION } from "../../store/sessionSlice";

import { Navbar, RowNav, List, Item, RightInfo, SessionActions } from "./styles";
import Container from "../../shared/Container";
import Logo from "../../shared/Logo";

import avatarIcon from "../../assets/avatar.svg";

export default function Nav(): ReactElement {
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
                </RowNav>
            </Container>
        </Navbar>
    )
}