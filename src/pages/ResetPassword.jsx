import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom'

import TemplateResetPassword from '../templates/TemplateResetPassword'
import TemplateSuccessResetPassword from '../templates/TemplateSuccessResetPassword'


const ResetPassword = () => {

  const resetPassword = useSelector(state => state.resetPassword)

  return (
    // <React.Fragment>
    //   {!resetPassword.message ? 
    //   <TemplateResetPassword /> : <p>ODAODOASDI</p>

    //   }
    // </React.Fragment>
    <TemplateSuccessResetPassword />
  );
};

export default withRouter(ResetPassword);
