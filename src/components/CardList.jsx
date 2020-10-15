import React from "react";
import { withRouter } from "react-router-dom";

import CollaboratorCard from "./CollaboratorCard";

import "../styles/Components/CardList.css";

const CardList = (props) => {

  return (
    <div className="card_list">
      {props.list.map((element, index) => (
        <CollaboratorCard
          type={props.type}
          key={index}
          profilePicture={element.profilePicture}
          name={element.name}
          course={element.course}
          email={element.email}
          age={element.age}
          createdAt={element.createdAt}
        />
      ))}
    </div>
  );
};

export default withRouter(CardList);
