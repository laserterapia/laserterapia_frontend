import React from "react";

const Alert = props => {
  return (
    <p
      style={{
        display: props.condition ? "flex" : "none",
        fontSize: props.fontSize || "17px",
        color: props.color || "red",
        width: props.width || "inherit",
        margin: props.margin || "10px auto 0px 0px"
      }}
    >
      {props.message}
    </p>
  );
};

export default Alert;
