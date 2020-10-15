import { GET_USERS, GET_PATIENTS, REGISTER_PATIENT, ERROR_REGISTER_PATIENT } from "../actions/_types";

const INITIAL_STATE = {
  users: [],
  patients: [],
  errorRegisterPatient: ""
};

function HomeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_PATIENTS:
      return { ...state, patients: action.payload }
    case REGISTER_PATIENT: {
      return {...state, patients: [...state.patients, action.payload]}
    }
    default:
      return { ...state };
  }
}

export default HomeReducer;
