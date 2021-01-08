import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PulseLoader } from "react-spinners";
import TouchLogo from './3dtouchlogo.png';

const popUpScreen =
  "Navigate the 3D environment with your finger/cursor. Click on floating texts and icons to reveal more information.";

ReactDOM.render(
  <div className="loading">
    <Suspense
      fallback={
        <div className="background">
          <div className="PopUp">
          <img src={TouchLogo} alt="Logo" className="logo"/>
              <h1 className="description">{popUpScreen}</h1>
              <div className="loader">
                <PulseLoader size={24} color={"white"} />
              </div>
            </div>
          </div>
      }
    >
      <App />
    </Suspense>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
