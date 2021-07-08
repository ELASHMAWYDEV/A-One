import React, {useState} from "react";
import { Link } from "react-router-dom";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Employees, Services, Box } from "../../components";

const Home = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div className="home-container">
      <div className="navbar-container">
        <Logo />
      </div>
      <Employees />
      <div className="dash-line"></div>
      <Services />
      <div className="add-button">
          <button>اضافة</button>
      </div>
      <Box visible={visible} setVisible = {setVisible} price="300"/>
    </div>
  );
};

export default Home;
