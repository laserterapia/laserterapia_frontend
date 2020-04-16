import { LOGIN, REGISTER, ERROR, FORGOT_PASSWORD, RESET_PASSWORD } from "../actions/_types.js";

const INITIAL_STATE = {
  forgotPassword: {},
  resetPassword: {},
  errorAuth: false
};

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORGOT_PASSWORD: {
      return { ...state, forgotPassword: action.payload };
    }
    case RESET_PASSWORD: {
        return { ...state, resetPassword: action.payload }
    }
    default:
      return state;
  }
}

export default AuthReducer;
