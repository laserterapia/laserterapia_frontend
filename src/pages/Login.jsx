import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FormLogin from "../components/FormLogin";
import logo from "../assets/images/logo.jpg";
import { login, setErrorFalse } from '../redux/actions/auth.js'

const Login = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setErrorFalse())
  }, [dispatch])

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
