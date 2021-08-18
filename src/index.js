import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Store } from "./store/config/config";
import { Provider } from "react-redux";
import "./css/style.css";
import axios from "axios";
import "venobox/venobox/venobox.min.css";
import "jquery/dist/jquery.min.js";
import "venobox/venobox/venobox.min.js";

axios.interceptors.request.use((r) => {
  const TOKEN = JSON.parse(localStorage.getItem("accessToken"));
  if (TOKEN) r.headers["Authorization"] = `Bearer ${TOKEN}`;
  return r;
});

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
