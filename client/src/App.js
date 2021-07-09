import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar } from "./components";
import { Login, Home } from "./router";

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
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
