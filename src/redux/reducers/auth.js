import {
  ERROR_AUTH,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  LOGIN,
  SET_ERROR_FALSE,
  SET_ERROR,
} from "../actions/_types.js";

const INITIAL_STATE = {
  forgotPassword: {},
  resetPassword: {},
  errorAuth: false,
  errorMsg: "",
};

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return { ...state, forgotPassword: action.payload };
    case RESET_PASSWORD:
      return { ...state, resetPassword: action.payload };
    case LOGIN:
      return {
        ...state,
        errorAuth: action.payload.error ? true : false,
        errorMsg: action.payload.error,
      };
    case ERROR_AUTH:
      return { ...state, errorAuth: true };
    case SET_ERROR:
      return { ...state, errorAuth: false, errorMsg: '' }
    default:
      return state;
  }
}

export default AuthReducer;
