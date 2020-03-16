import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/pages/ForgotPassword.css";
import "../styles/pages/ResetPassword.css";

import Alert from "../components/Alert";


const TemplateResetPassword = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const checkPassword =
    password !== "" && confPass !== "" && password !== confPass;

  const forgotPassword = useSelector(state => state.forgotPassword);

  return (
    <div className="reset_password" style={{ flexDirection: "column" }}>
      <div className="problemas_login">
        <p className="texto_problemas">{"Estamos quase lá!"}</p>
      </div>
      <div className="form_reset_password">
        <p className="label_input_password">{"NOVA SENHA"}</p>
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          className="input_password"
        />
        <p className="label_input_password">{"REPITA SUA SENHA"}</p>
        <input
          style={{ marginBottom: checkPassword ? "0px" : "60px" }}
          onChange={e => setConfPass(e.target.value)}
          type="password"
          value={confPass}
          className="input_password"
        />
        <Alert
          condition={checkPassword}
          message={"As senhas devem ser iguais"}
          margin="10px auto 30px 0px"
        />
        <button onClick={() => dispatch()} className="button_reset_password">
          {"CONFIRMAR NOVA SENHA"}
        </button>
      </div>
    </div>
  );
};

export default TemplateResetPassword;
