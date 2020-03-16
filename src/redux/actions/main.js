import axios from "axios";
import { BASE_URL } from "../../assets/constants";
import { LOGIN, ERROR, REGISTER, FORGOT_PASSWORD } from "./_types";

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
                type: ERROR
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
                type: ERROR
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
                type: ERROR
            });
        })
}

export { login, register, forgotPassword }