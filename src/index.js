// // UseContext

// // useContext is a hook in React that allows you to access the current value of a context directly within a functional component. It's a way to consume data or functionality from a context without having to use the Context.Consumer component or prop drilling (passing props down through multiple levels of components). Context is typically used to share data or state that is considered "global" or shared among multiple components in a React application, such as themes, user authentication, or language preferences. //

//============================================================================================================================================//

// // more detaild in ./components/comp3

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
