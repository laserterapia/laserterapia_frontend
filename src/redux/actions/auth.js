import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { LOGIN, ERROR, REGISTER, FORGOT_PASSWORD, RESET_PASSWORD, SET_ERROR_FALSE, ERROR_AUTH } from "./_types";

const login = (email, password) => async(dispatch) => {
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    };
    return axios
        .post(
            `${BASE_URL}/auth/authenticate`, {
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
                type: ERROR_AUTH
            });
        });
};

const register = (user) => async(dispatch) => {
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
                payload: res.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: ERROR_AUTH
            });
        })
}

const forgotPassword = (email) => async(dispatch) => {
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    };
    axios.post(
            `${BASE_URL}/auth/forgot-password`, { email: email },
            header
        )
        .then((res) => {
            return dispatch({
                type: FORGOT_PASSWORD,
                payload: res.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: ERROR_AUTH
            });
        })
}

const resetPassword = (email, token, password) => async(dispatch) => {
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    };
    axios.post(
            `${BASE_URL}/auth/reset-password`, { email: email, token: token, password: password },
            header
        )
        .then((res) => {
            return dispatch({
                type: RESET_PASSWORD,
                payload: res.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: ERROR_AUTH
            });
        })
}


export { login, register, forgotPassword, resetPassword }