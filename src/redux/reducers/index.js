import { createStore, applyMiddleware, combineReducers } from "redux";

import promise from "redux-promise";
import thunk from "redux-thunk";

import AuthReducer from "./auth";
import HomeReducer from "./home";
import MainReducer from "./main";

const reducers = combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  main: MainReducer
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

const store = applyMiddleware(promise, thunk)(createStore)(reducers, persistedState);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    home: store.getState().home,
    main: store.getState().main
  });
});

export default store;
