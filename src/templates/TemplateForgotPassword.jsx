import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Alert from "../components/Alert";

import "../styles/pages/ForgotPassword.css";

import { forgotPassword as forgot_password } from "../redux/actions/main";

const TemplateForgotPassword = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const forgotPassword = useSelector(state => state.forgotPassword);
  const error = useSelector(state => state.error);

  useEffect(() => {
    if (error) {
      props.history.push("/error");
    }
  }, [error]);

  return (
    <div className="forgot_password" style={{ flexDirection: "column" }}>
      <div className="problemas_login">
        <p className="texto_problemas">Problemas com o login?</p>
      </div>
      <div className="form_forgot_password">
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="input_email"
          placeholder="Insira o seu email"
        />
        <Alert
          condition={forgotPassword.error}
          message={forgotPassword.error}
        />
        <Alert
          condition={forgotPassword.message}
          message={`${forgotPassword.message}. Você pode fechar essa janela agora. `}
          color="green"
        />
        <button
          onClick={() => dispatch(forgot_password(email))}
          className="button_email"
        >
          Enviar email de verificação
        </button>
        <p className="alert_email">
          Caso não receba o email, por favor, verifique a caixa de spam.
        </p>
      </div>
    </div>
  );
};

export default withRouter(TemplateForgotPassword);
