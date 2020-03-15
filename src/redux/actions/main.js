import axios from "axios";
import { BASE_URL, REGISTER_SUCCESS } from "../../assets/constants";
import { LOGIN, ERROR, REGISTER } from "./_types";

const login = (email, password) => async (dispatch) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  return axios
    .post(
      `${BASE_URL}/auth/authenticate`,
      {
        email: email,
        password: password
      },
      header
    )
    .then(res => {
      return dispatch({
        type: LOGIN,
        payload: res.data
      });
    })
    .catch(error => {
      return dispatch({
        type: ERROR
      });
    });
};

const register = (user) => async (dispatch) => {
  const header = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  axios.post(
    `${BASE_URL}/auth/register`,
    user,
    header
  )
    .then((res) => {
      return dispatch({
        type: REGISTER,
        result: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch((error) => {
      return dispatch({
        type: ERROR
      });
    })
}

export { login, register }
