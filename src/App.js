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

import "./App.css";

function App() {
  const [token, setToken] = useState(false);
  const [workerList, setWorkerList] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token]);

  return (
    <div className="App">
      <header>
        <Navbar token={token} setToken={setToken} />
      </header>
      <div>
        {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{ token, setToken }}>
          <Route exact path="/" component={Home} />
          <workerContext.Provider value={{ workerList, setWorkerList }}>
            <PrivateRoute
              exact
              path="/customer"
              component={CustomerPage}
              //token={token}
            />

            <PrivateRoute
              exact
              path="/workers"
              component={WorkerPage}
              //token={token}
            />
          </workerContext.Provider>
          <Route
            exact
            path="/login"
            render={props => <Login {...props} setToken={setToken} />}
          />
          <Route exact path="/signup" component={SignUp} />
        </TokenContext.Provider>
      </div>
    </div>
  );
}

export default App;
