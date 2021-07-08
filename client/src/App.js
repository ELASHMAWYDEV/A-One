import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {Login, Home} from "./router";

//Styles
import "./style.scss";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
