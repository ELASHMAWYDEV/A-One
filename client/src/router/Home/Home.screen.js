import React, {useState} from "react";
import { Link } from "react-router-dom";
//Styles
import "./style.scss";

//Assets
import { Employees, Services} from "../../components";

const Home = () => {
  return (
    <div className="home-container">
      <Employees />
      <div className="dash-line"></div>
      <Services />
    </div>
  );
};

export default Home;
