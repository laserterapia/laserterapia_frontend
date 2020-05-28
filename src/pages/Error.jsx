import React from "react";
import erro from "../assets/images/erro.png";
import "../styles/pages/Error.css";

const Error = () => {
  return (
    <div className="container_error">
      <div className="row_error">
        <img alt='Imagem de Erro' className="img_erro" src={erro} />
        <b className="text_error">ALGUMA COISA DEU ERRADO</b>
      </div>
      <p className="error_desc">Desculpa! Ocorreu um erro :(</p>
    </div>
  );
};

export default Error;
