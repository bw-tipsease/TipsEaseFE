import React, { useState, useEffect,useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"

import Login from './Components/Login/Login'

import Home from './Components/LandingPage/Home'
import { TokenContext } from './Components/Context/Contexts';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import CustomerPage from './Components/CustomerPage/CustomerPage';

import './App.css'

function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);

  return (
    <div >
      <header >
      <Navbar token={token} setToken={setToken}/>
      </header>
      <div>
      {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{token,setToken}}>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/customer' component={CustomerPage} 
          //token={token} 
        />
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <Route exact path='/signup' component={SignUp}/>
      
        </TokenContext.Provider>
      </div>
    </div>
  );
}

export default App;

