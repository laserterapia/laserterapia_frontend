import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SET_RESET_PASSWORD,
  SET_ERROR,
  ERROR_AUTH,
  ADMIN_REGISTER,
  ADMIN_REGISTER_ERROR,
  RESET_ADMIN_REGISTER,
  RESET_FORGOT_PASSWORD
} from "./_types";

const login = (email, password) => async (dispatch) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  return axios
    .post(
      `${BASE_URL}/auth/authenticate`,
      {
        email: email,
        password: password,
      },
      header
    )
    .then((res) => {
      return dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error)
      return dispatch({
        type: ERROR_AUTH,
      });
    });
};

const register = (user) => async (dispatch) => {
  const header = {
    "Content-Type": "application/json",
  };
  axios
    .post(`${BASE_URL}/auth/register`, user, header)
    .then((res) => {
      return dispatch({
        type: REGISTER,
        payload: res.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ERROR_AUTH,
      });
    });
};

const forgotPassword = (email) => async (dispatch) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  axios
    .post(`${BASE_URL}/auth/forgot-password`, { email: email }, header)
    .then((res) => {
      return dispatch({
        type: FORGOT_PASSWORD,
        payload: res.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ERROR_AUTH,
      });
    });
};

const resetForgotPassword = () => {
  return {
    type: RESET_FORGOT_PASSWORD
  }
}

const resetPassword = (email, token, password) => async (dispatch) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  axios
    .post(
      `${BASE_URL}/auth/reset-password`,
      { email: email, token: token, password: password },
      header
    )
    .then((res) => {
      return dispatch({
        type: RESET_PASSWORD,
        payload: res.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ERROR_AUTH,
      });
    });
};

const setResetPassword = () => {
  return {
    type: SET_RESET_PASSWORD
  }
}

const setErrorFalse = () => (dispatch) => {
  return dispatch({
    type: SET_ERROR,
  });
};

const adminRegister = (registeredEmail, role) => async (dispatch) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  axios
    .post(`${BASE_URL}/auth/admin-register`, { registeredEmail, role }, {headers})
    .then((res) => {
      return dispatch({
        type: ADMIN_REGISTER,
        payload: res.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ADMIN_REGISTER_ERROR,
      });
    });
}

const resetAdminRegister = () => (dispatch) => {
  return dispatch(
    {
      type: RESET_ADMIN_REGISTER
    }
  )
}

export { login, register, forgotPassword, resetForgotPassword, resetPassword, setResetPassword, setErrorFalse, adminRegister, resetAdminRegister };
