import React, { useState } from "react";
import { Link } from "react-router-dom";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <div className="container">
        <div className="form-container">
          <div className="logo-container">
            <Logo />
          </div>
          <form>
            <div className="username-container">
              <input
                type="text"
                placeholder="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password-container">
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <Link to="/home">تسجيل الدخول</Link>
            </div>
          </form>
        </div>
        <div className="background-container">
          <div className="layer">
            <h2>You're only as good as your last haircut</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
