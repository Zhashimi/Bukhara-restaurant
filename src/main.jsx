import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ToastContainer position="top-center" autoClose={2000} />
      <App />
    </Provider>
  </>
);
