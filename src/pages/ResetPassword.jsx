import React from "react";
import { useSelector } from "react-redux";

import TemplateResetPassword from '../templates/TemplateResetPassword'
import Alert from "../components/Alert";

const ResetPassword = () => {

  const resetPassword = useSelector(state => state.resetPassword)

  return (
    <React.Fragment>
      {!resetPassword.message ? 
      <TemplateResetPassword /> : <p>ODAODOASDI</p>

      }
    </React.Fragment>
  );
};

export default ResetPassword;
