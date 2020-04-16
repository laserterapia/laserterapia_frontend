import { GET_USERS } from "../actions/_types";

const INITIAL_STATE = {
  users: []
};

function HomeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
}

export default HomeReducer;
