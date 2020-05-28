import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import "../styles/Components/FormLogin.css";

import { login } from "../redux/actions/auth.js";

const FormLogin = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentUser = useSelector((state) => state.main.currentUser);

  const enableButton = email !== "" && password !== "";

  const redirectForgotPassword = () => {
    props.history.push("/forgot_password");
  };

  const redirectRegister = () => {
    props.history.push("/register");
  };

  const redirectHome = () => {
    if (!isEmpty(currentUser) && !currentUser.error) {
      props.history.push("/home");
    }
  };

  function isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  useEffect(() => {
    redirectHome();
  });

  const renderAlert = (condition, message) => {
    return (
      <p
        style={{
          display: condition ? "flex" : "none",
          fontSize: "15px",
          color: "red",
          width: "inherit",
          margin: "10px 0px 0px",
        }}
      >
        {message}
      </p>
    );
  };

  return (
    <div className="login">
      <div
        style={{
          backgroundColor: "#9100c7",
          height: "30px",
          display: "block",
          textAlign: "center",
        }}
      >
        <p style={{ color: "white", margin: "6px" }}>LOGIN</p>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "10px",
            border: "1px solid black",
            height: "30px",
            padding: "0px 5px",
          }}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: "1px solid black",
            height: "30px",
            padding: "0px 5px",
          }}
        />

        {renderAlert(currentUser.error, currentUser.error)}
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "center",
          marginTop: "10px",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => dispatch(login(email, password))}
          disabled={!enableButton}
          style={{
            width: "90px",
            height: "30px",
            backgroundColor: "#9100c7",
            border: "none",
            color: "white",
            alignSelf: "center",
            cursor: enableButton ? "pointer" : "not-allowed",
            opacity: enableButton ? "1.0" : "0.5",
          }}
        >
          {"ENTRAR"}
        </button>
        <p
          onClick={() => redirectForgotPassword()}
          style={{ margin: "5px 0px 0px 0px", cursor: "pointer" }}
        >
          Esqueceu sua senha?
        </p>

        <p
          onClick={() => redirectRegister()}
          style={{
            margin: "5px 0px 0px 0px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Registre-se
        </p>
      </div>
    </div>
  );
};

export default withRouter(FormLogin);
