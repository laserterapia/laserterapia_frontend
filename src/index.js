import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./redux/reducers/index";

ReactDOM.render(
  <Provider store={store}>
    <Routes></Routes>
  </Provider>,
  document.getElementById("root")
);
