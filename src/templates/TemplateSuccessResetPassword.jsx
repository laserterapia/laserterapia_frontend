import React from "react";

import "../styles/pages/ForgotPassword.css";
import '../styles/pages/SuccessResetPassword.css'
import success_reset_password from '../assets/images/success_reset_password.png'

const TemplateSuccessResetPassword = (props) => {

  return (
    <div className="forgot_password" style={{ flexDirection: "column" }}>
      <div className="problemas_login">
        <p className="texto_problemas">Parabéns!</p>
      </div>
      <div className='success_reset_center'>
        <img src={success_reset_password} alt="Sucesso ao resetar a senha"  className='img_success'/>
        <p className='text_reset_success'>Sua nova senha foi redinida com sucesso!</p>
      </div>
      <a onClick={props.returnToBegin}>Voltar ao início</a>
    </div>
  );
};

export default TemplateSuccessResetPassword;
