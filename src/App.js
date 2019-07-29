import React, { useState, useEffect,useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"

import Login from './Components/Login/Login'

import Home from './Components/LandingPage/Home'
import { TokenContext } from './Components/Context/Contexts';
import SignUp from './Components/SignUp/SignUp';
import Swal from 'sweetalert2'
function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);
const handleSubmit =() =>{
  Swal.fire({
    position: 'center',
    type: 'success',
    title: 'Logging out!',
    showConfirmButton: false,
    timer: 2500
  })
}
  // console.log('Token u there brother?: ', token);

  return (
    <div >
      <header >
      
        <h1>TipsEase</h1>
        <Link  to='/'>
         Home   
        </Link>
        <Link to="/SignUp">
            Sign Up   
          </Link>
        {token === null ? (
          <Link to='/login'>
            Login   
          </Link>

        ) : (
          <Link to='/login'>
            <button type="submit" onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </button>
          </Link>
        )}


      </header>
      <div>
      {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{token,setToken}}>
        <PrivateRoute exact path='/' component={Home}
        //  token ={token} 
         />
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <Route exact path='/signup' component={SignUp}/>
      
        </TokenContext.Provider>
      </div>
    </div>
  );
}

export default App;

