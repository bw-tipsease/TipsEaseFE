import React, { useState, useEffect,useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"

import Login from './Components/Login/Login'

import Home from './Components/LandingPage/Home'
import { TokenContext } from './Components/Context/Contexts';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
<<<<<<< HEAD
import Worker from './Components/LandingPage/Workers/WorkersGrid'
import Swal from 'sweetalert2'

import './App.css'
import WorkersGrid from './Components/LandingPage/Workers/WorkersGrid';
=======
import CustomerPage from './Components/CustomerPage/CustomerPage';

import './App.css'
>>>>>>> 0db049fcb0283ddd2678c5a547f55700678b8c37

function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);

<<<<<<< HEAD
  // console.log('Token u there brother?: ', token);

  return (
    <div >
      <header >
      
        <Navbar>

        </Navbar>
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
      <main>
      <WorkersGrid />
      </main>
      <div>
      {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{token,setToken}}>
        <PrivateRoute exact path='/' component={Home}
        //  token ={token} 
         />
=======
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
>>>>>>> 0db049fcb0283ddd2678c5a547f55700678b8c37
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <Route exact path='/signup' component={SignUp}/>
      
        </TokenContext.Provider>
      </div>
    </div>
  );
<<<<<<< HEAD
  // const handleSubmit =() =>{
  //   Swal.fire({
  //     position: 'center',
  //     type: 'success',
  //     title: 'Logging out!',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }
=======
>>>>>>> 0db049fcb0283ddd2678c5a547f55700678b8c37
}

export default App;

