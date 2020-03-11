import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader";
import FormLogin from "../components/organisms/FormLogin/FormLogin";
import logo from "../assets/images/logo.jpg";
import { login } from '../redux/actions/main'

const Login = () => {

  return (
    <div style={{backgroundColor: '#141414', height: '100%'}}>
      <div style={{ display: "block", textAlign: "center" }}>
        <img src={logo} alt='Logo Laserterapia' style={{ width: "200px", height: "200px" }} />
      </div>
      <FormLogin login={login} />
    </div>
  );
};

export default Login;
