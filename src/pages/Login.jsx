import React from "react";
import FormLogin from "../components/FormLogin";
import logo from "../assets/images/logo.jpg";
import { login } from '../redux/actions/auth.js'

const Login = () => {

  return (
    <div style={{ backgroundColor: '#141414', height: '100vh' }}>
      <div style={{ display: "block", textAlign: "center" }}>
        <img src={logo} alt='Logo Laserterapia' style={{ width: "200px", height: "200px" }} />
      </div>
      <FormLogin login={login} />
    </div>
  );
};

export default Login;
