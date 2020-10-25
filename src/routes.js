import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Collaborators from './pages/Collaborators'
import Patients from "./pages/Patients";
import PatientRegister from "./pages/PatientRegister";
import Patient from "./pages/Patient"

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/error" component={Error} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path='/home' component={Home} />
        <Route path='/collaborators' component={Collaborators} />
        <Route path='/patients' component={Patients} />
        <Route path='/patient_register' component={PatientRegister} />
        <Route path='/patient' component={Patient} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
