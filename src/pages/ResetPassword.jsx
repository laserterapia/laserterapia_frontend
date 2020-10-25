import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import TemplateResetPassword from "../templates/TemplateResetPassword";
import TemplateSuccessResetPassword from "../templates/TemplateSuccessResetPassword";
import { useEffect } from "react";

import { setResetPassword } from "../redux/actions/auth";

const ResetPassword = (props) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setResetPassword());
  }, [])

  return (
    <React.Fragment>
      {!resetPassword.message ? (
        <TemplateResetPassword reset_password={resetPassword} token={token} email={email} returnToBegin={returnToBegin} />
      ) : (
        <TemplateSuccessResetPassword returnToBegin={returnToBegin} />
      )}
    </React.Fragment>
  );
};

export default withRouter(ResetPassword);
