import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { GET_USERS, ERROR, GET_PATIENTS, REGISTER_PATIENT, ERROR_REGISTER_PATIENT } from "./_types";

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

const registerPatient = (sentPatient, token) => async dispatch => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
  axios
    .post(`${BASE_URL}/patient/register`, {sentPatient}, {headers})
    .then((res) => {
      return dispatch({
        type: REGISTER_PATIENT,
        payload: res.data,
      });
    })
    .catch((error) => {
      return dispatch({
        type: ERROR_REGISTER_PATIENT,
      });
    });
}

export { getAllUsers, getAllPatients, registerPatient };
