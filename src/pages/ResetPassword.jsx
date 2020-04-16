import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import TemplateResetPassword from "../templates/TemplateResetPassword";
import TemplateSuccessResetPassword from "../templates/TemplateSuccessResetPassword";
import { useEffect } from "react";

const ResetPassword = (props) => {
  const resetPassword = useSelector(state => state.auth.resetPassword);

  let url = window.location.href
  url = url.split('=')
  
  const token = url[1]
  const email = url[3]


  const returnToBegin = () => {
    props.history.push('/')
  }

  useEffect(() => {
    if(!token || !email){
      returnToBegin()
    }
  }, [])

  return (
    <React.Fragment>
      {!resetPassword.message ? (
        <TemplateResetPassword token={token} email={email} returnToBegin={returnToBegin} />
      ) : (
        <TemplateSuccessResetPassword returnToBegin={returnToBegin} />
      )}
    </React.Fragment>
  );
};

export default withRouter(ResetPassword);
