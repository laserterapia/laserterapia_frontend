import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Alert from "../components/Alert";

import '../styles/pages/ForgotPassword.css'

import { forgotPassword as forgot_password } from '../redux/actions/main'

const ForgotPassword = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')

  const forgotPassword = useSelector(state => state.forgotPassword)

  return (
    <div className='forgot_password' style={{ flexDirection: 'column' }}>
      <div className='problemas_login'>
        <p className='texto_problemas'>Problemas com o login?</p>
      </div>
      <div className='form_forgot_password'>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='input_email' placeholder='Insira o seu email' />
        <Alert
          condition={forgotPassword.error}
          message={forgotPassword.error}
        />
        <Alert
          condition={forgotPassword.message}
          message={`${forgotPassword.message}. Cheque a sua caixa de entrada.`}
          color="green"
        />
        <button onClick={() => dispatch(forgot_password(email))} className='button_email'>Enviar email de verificação</button>
        <p className='alert_email'>Caso não receba o email, por favor, verifique a caixa de spam.</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
