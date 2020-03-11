import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../../redux/actions/main";

const FormLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="login"
      style={{
        flexDirection: "column",
        width: "auto",
        maxWidth: "425px",
        height: "220px",
        border: "1px solid black",
        display: "flex",
        margin: "0px auto",
        backgroundColor: "white"
      }}
    >
      <div
        style={{
          backgroundColor: "#9100c7",
          height: "30px",
          display: "block",
          textAlign: "center"
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
          alignSelf: "center"
        }}
      >
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            marginBottom: "10px",
            border: "1px solid black",
            height: "30px",
            padding: "0px 5px"
          }}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            border: "1px solid black",
            height: "30px",
            padding: "0px 5px"
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "center",
          marginTop: "10px",
          flexDirection: "column"
        }}
      >
        <button
          onClick={login(email, password)}
          style={{
            width: "90px",
            height: "30px",
            backgroundColor: "#9100c7",
            border: "none",
            color: "white",
            alignSelf: "center",
            cursor: "pointer"
          }}
        >
          ENTRAR
        </button>
        <p style={{ margin: "5px 0px 0px 0px", cursor: "pointer" }}>
          Esqueceu sua senha?
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
