import {
  ERROR_AUTH,
  FORGOT_PASSWORD,
  RESET_FORGOT_PASSWORD,
  RESET_PASSWORD,
  LOGIN,
  SET_ERROR,
  ADMIN_REGISTER,
  ADMIN_REGISTER_ERROR,
  RESET_ADMIN_REGISTER
} from "../actions/_types.js";

const INITIAL_STATE = {
  forgotPassword: {},
  resetPassword: {},
  errorAuth: false,
  errorMsg: "",
  successAdminRegister: undefined
};

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return { ...state, forgotPassword: action.payload };
    case RESET_FORGOT_PASSWORD:
      return { ...state, forgotPassword: {}}
    case RESET_PASSWORD:
      return { ...state, resetPassword: action.payload };
    case SET_RESET_PASSWORD: {
      return { ...state, resetPassword: {}}
    }
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
    case ADMIN_REGISTER:
      return { ...state, successAdminRegister: true }
    case ADMIN_REGISTER_ERROR:
      return { ...state, successAdminRegister: false }
    case RESET_ADMIN_REGISTER:
      return { ...state, successAdminRegister: undefined }
    default:
      return state;
  }
}

export default AuthReducer;
