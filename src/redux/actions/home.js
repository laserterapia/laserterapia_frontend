import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { GET_USERS, ERROR, GET_PATIENTS } from "./_types";

const getAllUsers = token => async dispatch => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
  return axios
    .get(`${BASE_URL}/user/`, {headers} )
    .then(res => {
      return dispatch({
        type: GET_USERS,
        payload: res.data.users
      });
    })
    .catch(error => {
      console.log(error)
      return dispatch({
        type: ERROR
      });
    });
};

const getAllPatients = token => async dispatch => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
  return axios
    .get(`${BASE_URL}/patient/`, {headers} )
    .then(res => {
      return dispatch({
        type: GET_PATIENTS,
        payload: res.data.patients
      });
    })
    .catch(error => {
      console.log(error)
      return dispatch({
        type: ERROR
      });
    });
};

export { getAllUsers, getAllPatients };
