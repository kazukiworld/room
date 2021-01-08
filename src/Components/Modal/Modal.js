import React from "react";
import "./Modal.css";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
// import CloseIcon from "./closeicon.png";

export default function Modal({ children, title, pageHeader}) {
  // const [fadeIn, setFadeIn, stop] = useSpring(() => ({opacity: 0}))
  const history = useHistory();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="overlay" style={props}>
      <div className="overlay2" />
      <div className="overlay3">
      <div className="overlay4" onClick={() => history.push("/")}>close</div>
        <div className="topBar">
        {pageHeader}
          {/* <div className="space" /> */}
          <h1 className="title2">{title}</h1>
          {/* <div className="exitbutton">
            <img
              className="icon"
              src={CloseIcon}
              alt="close"
              onClick={() => history.push("/")}
            />
          </div> */}
        </div>
        <div className="Modal">
          <div className="text">{children}</div>
        </div>
      </div>
    </animated.div>
  );
}
