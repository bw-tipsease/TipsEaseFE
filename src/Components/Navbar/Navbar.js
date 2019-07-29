import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  background: #232323;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2.4rem;
`;

const NavLogo = styled.div`
  font-size: 3rem;
  color: #f3e367;
  margin-right: auto;
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

    const [token, setToken] = useState(false)

    useEffect(() => {
      setToken(localStorage.getItem('token'))
      console.log('test')
    }, [token]);

  return (
    <NavbarContainer>
      <NavLogo>tipsease</NavLogo>

      <NavItems>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/services'>Services</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/contact'>Contact</NavItem>

        {token === null ? (
          <Link to='/login'>
            Login   
          </Link>

        ) : (
          <NavCta to='/login'>
            <button type="submit" onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </button>
          </NavCta>
        )}
        
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
