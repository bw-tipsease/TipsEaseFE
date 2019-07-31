import React, { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./Components/SecretData/PrivateRoute";

import Login from "./Components/Login/Login";

import Home from "./Components/LandingPage/Home";
import { TokenContext, workerContext } from "./Components/Context/Contexts";
import SignUp from "./Components/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import CustomerPage from "./Components/CustomerPage/CustomerPage";
import WorkerPage from "./Components/CustomerPage/WorkerPage";
import TipForm from './Components/CustomerPage/Workers/TipForm';

import "./App.css";

function App() {
  const [token, setToken] = useState(false);
  const [workerList, setWorkerList] = useState([{
    name: "Colin de Vries",
    workType: 'Bartender',
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workType: 'Server',
    workDuration: "5 months"
  },]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]);

  return (
    <div>
      <header>
        <Navbar token={token} setToken={setToken} />
      </header>
      <div>
        {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{ token, setToken }}>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/customer"
            component={CustomerPage}
            workerList={workerList}
          //token={token}
          />

          <PrivateRoute
            exact
            path="/workers"
            component={WorkerPage}
            workerList={workerList}
            setWorkerList={setWorkerList}
          //token={token}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} setToken={setToken} />}
          />
          <Route exact path="/Contact" />
          <Route exact path="/Services" />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path='/TipForm' component={TipForm} />
        </TokenContext.Provider>
      </div>
    </div>
  );
}

export default App;
