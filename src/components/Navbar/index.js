import React, { useContext } from "react";
import { LogoutBtn, Nav, NavLink, NavMenu } from "./NavbarElements";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../pages/AuthContext";

const Navbar = () => {
//   const [loginStatus, setLoginStatus] = useState(false);
  const { loginStatus, setLoginStatus } = useContext(AuthContext)

  let navigate = useNavigate();
  const logoutOp = (e) => {
    setLoginStatus("false");
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <Nav>
        {loginStatus === "true" ? (
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/loan_apply">Loan Application</NavLink>
            <NavLink to="/loan_status">Loan Status</NavLink>
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
