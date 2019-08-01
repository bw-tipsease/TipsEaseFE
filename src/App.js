import React, { useState, useEffect,useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Login from './Components/Login/Login'
import { TweenMax } from "gsap/TweenMax";


import Home from './Components/LandingPage/Home'
import { TokenContext } from './Components/Context/Contexts';
import SignUp from './Components/SignUp/SignUp';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import TipForm from './Components/LandingPage/Workers/TipForm'
import TipModal from './Components/LandingPage/Workers/TipModal';
import './App.css'

const mobileToggle = () => {
  TweenMax.to('.nav-items', 0.3, {y: 70});
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 4.8rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media(max-width: 800px) {
    padding: 0.5rem 2.4rem;
  }
`;

const NavLogo = styled.div`
  font-size: 2.9rem;
  color: #f3e367;
  margin-right: auto;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
`;

const NavItems = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Varela Round", sans-serif;

  @media(max-width: 1100px) {
    width: 55%;
  }

  @media(max-width: 800px) {
    position: absolute;
    flex-direction: column;
    background: black;
    transform: translateY(-240px); 
    top: 0;
    right: 0;
    justify-content: center;
    height: 240px;
    z-index: 45;
  }
`;

const NavItem = styled(NavLink)`
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
  @media(max-width: 800px) {
    width: 100%;
    margin: 1rem 0;
    font-size: 1.4rem;
    text-align: center;
  }
`;

const NavCta = styled(NavItem)`
  color: #f3e367;
  /* font-style: italic; */
  :hover {
    color: #f7eb95;
    cursor: pointer;
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  svg {
    font-size: 3rem;
    color: #f3e367;
  }

  @media(max-width: 800px) {
    display: flex;
  }
`;

const Logout =styled.button`
width:75px;
height:50px;
background-color:#f7eb95;
:hover {
  cursor: pointer;
  background-color: #f3e367;
}
`
function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);

  // console.log('Token u there brother?: ', token);
  return (
    <div >
      <header >
      
        <NavbarContainer>
          <NavLogo>tipsEase</NavLogo>
        <MobileNavToggle className='mobile-nav-toggle' onClick={mobileToggle}><FontAwesomeIcon icon={faBars} /></MobileNavToggle>
        <NavItems className='nav-items'>
        <NavItem  to='/'>
         Home   
        </NavItem>
        <NavItem  to="/About">
        About
        </NavItem>
        <NavItem to="/Team">
        Team
        </NavItem>
        <NavCta to="/SignUp" activeClassName='active-cta'>
            Sign Up   
          </NavCta>
        {token === null ? (
          <NavCta to='/login' activeClassName='active-cta'>
            Login   
          </NavCta>

        ) : (
          <NavCta to='/login' activeClassName='active-cta'>
            <Logout className="btn" type="submit" onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </Logout>
          </NavCta>
          
        )}
        </NavItems>
</NavbarContainer>

      </header>
      <div>
      {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{token,setToken}}>
        <Route exact path='/' component={Home}
        //  token ={token} 
         />
         <Route exact path="/About" />
         <Route exact path="/Team"/>
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <Route exact path='/signup' component={SignUp}/>
        <Route path='/TipForm' component={TipForm}/>
      
        </TokenContext.Provider>
      </div>
    </div>
  );
  // const handleSubmit =() =>{
  //   Swal.fire({
  //     position: 'center',
  //     type: 'success',
  //     title: 'Logging out!',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }
}

export default App;

