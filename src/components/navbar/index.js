import React from "react";
import {
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,
} from "./navbarElements";

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>

                    <NavLink to='/search' activeStyle>
                        Search
                    </NavLink>

                    <NavLink to='/account' activeStyle>
                        Account
                    </NavLink>
                </NavMenu>
                
                <NavBtn>
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default NavBar;