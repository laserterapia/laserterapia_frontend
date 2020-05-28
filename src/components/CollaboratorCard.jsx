import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody
} from "reactstrap";

import not_found from "../assets/images/not_found.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Components/Card.css";

const CollaboratorCard = (props) => {
  return (
    <Card>
      <CardImg
        className="profile_picture"
        top
        src={props.profilePicture ? props.profilePicture : not_found}
        alt="Foto de perfil"
      />
      <CardBody>
        <CardText>Colaborador: {props.name}</CardText>
        <CardText>Curso: {props.course}</CardText>
        <CardText>Email: {props.email}</CardText>
      </CardBody>
    </Card>
  );
};

export default CollaboratorCard;
