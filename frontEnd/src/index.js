import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
{/* <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/css/Navbar-Right-Links-Dark-icons.css">
<link rel="stylesheet" href="./assets/css/styles.css"></link> */}


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
