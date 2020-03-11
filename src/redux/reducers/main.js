import { LOGIN } from '../actions/_types.js'

const INITIAL_STATE = {
  currentUser: {}
};

function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

export default MainReducer;
