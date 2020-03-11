import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { LOGIN } from "./_types";
import { bindActionCreators } from "redux";

export const login = (email, password) => async () => {
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
      return {
        type: LOGIN,
        payload: res
      };
    })
    .catch(error => {
      console.log(error);
    });
};
