import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/pages/ForgotPassword.css";
import "../styles/pages/ResetPassword.css";

import Alert from "../components/Alert";

import { resetPassword } from '../redux/actions/auth.js'


const TemplateResetPassword = (props) => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const checkPassword =
    password !== "" && confPass !== "" && password !== confPass;

  const reset_password = useSelector(state => state.auth.resetPassword);
  const error = useSelector(state => state.main.error);

  useEffect(() => {
    if (error) {
      props.history.push("/error");
    }
  }, [error]);

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
          style={{ marginBottom: checkPassword || reset_password.error ? "0px" : "60px" }}
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
        <Alert
          condition={reset_password.error}
          message={reset_password.error}
          margin="10px auto 30px 0px"
        />
        <button onClick={() => dispatch(resetPassword(props.email, props.token, password))} className="button_reset_password">
          {"CONFIRMAR NOVA SENHA"}
        </button>

        <a className='link_return_begin' onClick={props.returnToBegin}>Voltar ao início</a>
      </div>
    </div>
  );
};

export default TemplateResetPassword;
