import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/pages/ForgotPassword.css";
import "../styles/pages/ResetPassword.css";

import Alert from "../components/Alert";

import { forgotPassword as forgot_password } from "../redux/actions/main";

const ResetPassword = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const forgotPassword = useSelector(state => state.forgotPassword);

  return (
    <div className="reset_password" style={{ flexDirection: "column" }}>
      <div className="problemas_login">
        <p className="texto_problemas">Estamos quase lá!</p>
      </div>
      <div className="form_reset_password">
        <p className="label_input_password">NOVA SENHA</p>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          className="input_password"
        />
        <p className="label_input_password">REPITA SUA SENHA</p>
        <input
          onChange={e => setConfPass(e.target.value)}
          value={confPass}
          className="input_password"
        />
        <button onClick={() => dispatch()} className="button_reset_password">
          CONFIRMAR NOVA SENHA
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
