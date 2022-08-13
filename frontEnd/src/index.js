import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store = {store}>
    <App />
    </Provider>
  
);
// ReactDOM.render(
//   <Provider store = {store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// )
