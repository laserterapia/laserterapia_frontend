import React from "react";
import { BrowserRouter } from "react-router-dom";
import './styles/App.css'

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
