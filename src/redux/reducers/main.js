import { LOGIN, REGISTER, ERROR, FORGOT_PASSWORD, RESET_PASSWORD } from "../actions/_types.js";

const INITIAL_STATE = {
  currentUser: {},
  error: false,
  forgotPassword: {},
  resetPassword: {}
};

function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return { ...state, currentUser: action.payload };
    case FORGOT_PASSWORD: {
      return { ...state, forgotPassword: action.payload };
    }
    case RESET_PASSWORD: {
        return { ...state, resetPassword: action.payload }
    }
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export default MainReducer;
