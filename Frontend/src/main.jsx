import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import "./index.css";

import Home from "./views/Home";

ReactDOM.render(
  <Provider store={Store}>
    <Home />
  </Provider>,

  document.getElementById("root")
);
