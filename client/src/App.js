import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar } from "./components";
import { Login, Home, Statistics } from "./router";

//Styles
import "./style.scss";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <Navbar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Statistics" component={Statistics} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
