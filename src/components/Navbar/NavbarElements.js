import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: #EBF4F6;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
 
export const NavLink = styled(Link)`
  color: #9DA0AA;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  &.active {
    color: #4d4dff;
  }
`;

export const LogoutBtn = styled.button`
  color: #9DA0AA;
  padding: 0 1rem;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #9DA0AA;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;