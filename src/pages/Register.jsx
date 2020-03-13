import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader";
import logo from "../assets/images/logo.jpg";
import "../styles/pages/Register.css";

const Register = () => {
  return (
    <div className="main_register_container">
      <div className="seja_bem_vindo">
        <img className="img_logo" src={logo} />
        <b className="texto_bem_vindo">Seja bem vindo!</b>
      </div>

      <div className="form_register">
        <b className='cadastre_se'>CADASTRE-SE</b>
        <input className='inputs' placeholder='Nome Completo'></input>
        <input className='inputs' placeholder='Curso'></input>
        <input className='inputs' placeholder='Email'></input>
        <input style={{marginTop: '30px'}} className='inputs' placeholder='Senha'></input>
        <input className='inputs' placeholder='Repita sua senha'></input>

        <button className='register_button'>FINALIZAR CADASTRO</button>
      </div>
    </div>
  );
};

export default Register;
