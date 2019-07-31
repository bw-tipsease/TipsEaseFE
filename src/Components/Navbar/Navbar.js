import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #202020;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2.4rem;
`;

const NavLogo = styled.div`
  font-size: 3rem;
  color: #f3e367;
  margin-right: auto;
  margin-bottom: 0.7em;
  font-family: "Ubuntu", sans-serif;
`;

const NavItems = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Varela Round", sans-serif;
`;

const NavItem = styled(Link)`
  color: #c9c9c9;
  margin-bottom: 0.7em;
  text-transform: uppercase;
  transition: color 200ms ease-out;
  padding: 0.5rem;
  font-size: 1.6rem;
  text-decoration: none;

  :hover {
    color: white;
    cursor: pointer;
  }
`;

const NavCta = styled(NavItem)`
  color: #f3e367;
  font-style: italic;

  :hover {
    color: #f7eb95;
    cursor: pointer;
  }
`;

const Navbar = props => {
  return (
    <NavbarContainer>
      <NavLogo>tipsease</NavLogo>

      {localStorage.getItem("token") === null ? (
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/signup">Sign Up </NavItem>
          <NavItem to="/login">Login</NavItem>
        </NavItems>
      ) : (
        <NavItems>
          <NavItem to="/customer">Customers</NavItem>
          <NavItem to="/workers">Workers</NavItem>
          <NavCta to="/login">
            <NavItem
              type="submit"
              onClick={() => {
                localStorage.removeItem("token");
                props.setToken();
              }}
            >
              Logout
            </NavItem>
          </NavCta>
        </NavItems>
      )}
    </NavbarContainer>
  );
};

export default Navbar;