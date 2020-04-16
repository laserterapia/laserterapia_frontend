import React from "react";
import { withRouter } from "react-router-dom";
import { URL_FRONT } from '../assets/constants'

import logo_register from "../assets/images/logo_menu.png";
import "../styles/Components/Menu.css";

const Menu = (props) => {
  return (
    <div className="main_div_menu">
      <div className="menu_logo">
        <div className="div_nomes">
          <p className="name_projeto">PROJETO</p>
          <p className="name_laserterapia">LASERTERAPIA</p>
        </div>
        <img
          className="img_menu_logo"
          alt="Logo Laserterapia"
          src={logo_register}
        />
      </div>
      <div className="menu_navigation">
        <div className="links_menu">
          <a className="menu_link" href={`${URL_FRONT}/home`}>
            HOME
          </a>
          <a className="menu_link" href={`${URL_FRONT}/users`}>
            USUÁRIOS
          </a>
          <a className="menu_link" href={`${URL_FRONT}/patients`}>
            PACIENTES
          </a>

        </div>
      </div>
      {props.children}
    </div>
  );
};

export default withRouter(Menu);
