import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader";

const Error = () => {
  return (
    <div style={{ backgroundColor: "#141414", height: "100%" }}>ERROR</div>
  );
};

export default Error;
