import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ToastContainer />
    <App />
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
