import React from "react";
import { useAuthContext } from "./Providers";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Navbar, Loader } from "./components";
import { Login, Home, Statistics } from "./router";

//Styles
import "./style.scss";

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <div className="app-container">
      <Loader />
      <Router>
        {isLoggedIn ? (
          <>
            <Switch>
              <Navbar />
              <Route exact path="/home" component={Home} />
              <Route exact path="/statistics" component={Statistics} />
              <Redirect to="/home" />
            </Switch>
          </>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
