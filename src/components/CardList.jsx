import React from "react";
import { withRouter } from "react-router-dom";

import CollaboratorCard from "./CollaboratorCard";

import "../styles/Components/CardList.css";

const CardList = (props) => {

  return (
    <div className="card_list">
      {props.users.map((user, index) => (
        <CollaboratorCard
          key={index}
          profilePicture={user.profilePicture}
          name={user.name}
          course={user.course}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default withRouter(CardList);
