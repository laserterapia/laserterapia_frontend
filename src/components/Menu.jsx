import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { URL_FRONT } from "../assets/constants";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import logo_register from "../assets/images/logo_menu.png";
import "../styles/Components/Menu.css";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

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
      <Navbar expand="md" style={{backgroundColor: '#7c1894'}}>
        <NavbarToggler onClick={toggleMenu}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={`${URL_FRONT}/home`}>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${URL_FRONT}/users`}>ALUNOS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${URL_FRONT}/patients`}>PACIENTES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {props.children}
    </div>
  );
};

export default withRouter(Menu);
