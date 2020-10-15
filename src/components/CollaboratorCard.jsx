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

  const date = new Date(props.createdAt)

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return (
    <Card>
      <CardImg
        className="profile_picture"
        top
        src={props.profilePicture ? props.profilePicture : not_found}
        alt="Foto de perfil"
      />
      {props.type == 'collaborator' &&
        <CardBody>
          <CardText>Colaborador: {props.name}</CardText>
          <CardText>Curso: {props.course}</CardText>
          <CardText>Email: {props.email}</CardText>
        </CardBody>
      }
      {props.type == 'patient' &&
        <CardBody>
          <CardText>Nome: {props.name}</CardText>
          <CardText>Idade: {props.age}</CardText>
          <CardText>{`Cadastrado em: ${day}/${month}/${year}`}</CardText>
        </CardBody>
      }
    </Card>
  );
};

export default CollaboratorCard;
