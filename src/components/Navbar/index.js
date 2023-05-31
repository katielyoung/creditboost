
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to="/loan_manage" activeStyle>
                        Loan Management
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;