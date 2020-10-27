import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody
} from "reactstrap";
import { withRouter } from "react-router-dom";

import not_found from "../assets/images/not_found.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Components/Card.css";

const CollaboratorCard = (props) => {

  const date = new Date(props.createdAt)

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return (
    <Card style={{cursor: "pointer"}}>
      <CardImg
        className="profile_picture"
        top
        src={props.profilePicture ? props.profilePicture : not_found}
        alt="Foto de perfil"
      />
      {props.type == 'collaborator' &&
        <CardBody>
          <CardText>Colaborador: <span style={{fontWeight: "normal"}}>{props.name}</span></CardText>
          <CardText>Curso: <span style={{fontWeight: "normal"}}>{props.course}</span></CardText>
          <CardText>Email: <span style={{fontWeight: "normal"}}>{props.email}</span></CardText>
        </CardBody>
      }
      {props.type == 'patient' &&
        <CardBody>
          <CardText>Nome: <span style={{fontWeight: "normal"}}>{props.name}</span></CardText>
          <CardText>Idade: <span style={{fontWeight: "normal"}}>{props.age}</span></CardText>
          <CardText>{`Cadastrado em: ${day}/${month}/${year}`}</CardText>
        </CardBody>
      }
    </Card>
  );
};

export default withRouter(CollaboratorCard);
