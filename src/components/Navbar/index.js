import React, { useContext } from "react";
import { LogoutBtn, Nav, NavLink, NavMenu } from "./NavbarElements";
import AuthContext from "../../pages/AuthContext";

const Navbar = () => {
//   const [loginStatus, setLoginStatus] = useState(false);
  const { loginStatus, setLoginStatus } = useContext(AuthContext)

  const logoutOp = (e) => {
    
  };

  return (
    <>
      <Nav>
        {loginStatus === "true" ? (
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/loan_manage">Loan Management</NavLink>
            <LogoutBtn onClick={logoutOp}>Logout</LogoutBtn>
          </NavMenu>
        ) : (
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
