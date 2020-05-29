import { GET_USERS, GET_PATIENTS } from "../actions/_types";

const INITIAL_STATE = {
  users: [],
  patients: []
};

function HomeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_PATIENTS:
      return { ...state, patients: action.payload }
    default:
      return { ...state };
  }
}

export default HomeReducer;
