import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import Notifications from "react-notify-toast";

ReactDOM.render(
  <Provider store={store}>
    <Notifications options={{ zIndex: 9999, top: "20px" }} />
    <App />
  </Provider>,
  document.getElementById("root")
);
