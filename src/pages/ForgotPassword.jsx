import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import "../styles/pages/ForgotPassword.css";

import TemplateForgotPassword from "../templates/TemplateForgotPassword";
import TemplateResetPassword from "../templates/TemplateResetPassword";

const ForgotPassword = props => {
  const error = useSelector(state => state.error);

  useEffect(() => {
    if (error) {
      props.history.push("/error");
    }
  }, [error]);

  return <TemplateForgotPassword />;
};

export default withRouter(ForgotPassword);
