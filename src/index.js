import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { Provider } from "react-redux";

let initialState = [
  {
    id: 1,
    name: "Gaurav Mishra",
    Dob: "1996-09-05",
    city: "Bangalore",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "Obama Barack",
    Dob: "1946-01-01",
    city: "Delhi",
    phone: 1234567890,
  },
  {
    id: 3,
    name: "Bill Gates",
    Dob: "1956-01-01",
    city: "Pune",
    phone: 1234567890,
  },
  {
    id: 4,
    name: "Megan Fox",
    Dob: "1986-01-01",
    city: "Kolkata",
    phone: 1234567890,
  },
];

if (localStorage.getItem("users") === null)
  localStorage.setItem("users", JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem("users"));

const store = createStore(userReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
