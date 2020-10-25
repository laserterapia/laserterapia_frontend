import { ERROR, REGISTER, LOGIN, SET_ERROR } from "../actions/_types";

const INITIAL_STATE = {
  currentUser: {},
  currentPatient: {},
  token: "",
  error: false,
  errorMsg: "",
};

function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      if (action.payload.error) {
        return { ...state };
      } else {
        return {
          ...state,
          currentUser: action.payload.user,
          token: action.payload.token,
        };
      }
    case ERROR:
      return { ...state, error: true };
    case SET_ERROR:
      return { ...state, error: false };
    default:
      return { ...state };
  }
}

export default MainReducer;
