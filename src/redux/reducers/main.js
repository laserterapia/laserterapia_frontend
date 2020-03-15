import { LOGIN, REGISTER, ERROR } from '../actions/_types.js'

const INITIAL_STATE = {
  currentUser: {},
  error: false
};

function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return { ...state, currentUser: action.payload };
    case ERROR:
      return { ...state, error: true }
    default:
      return state;
  }
}

export default MainReducer;
