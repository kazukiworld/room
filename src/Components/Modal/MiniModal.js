import React, {useState} from "react";
import "./MiniModal.css";
import { useHistory } from "react-router-dom";
import {useSpring,animated} from 'react-spring'
// import {CSSTransition} from 'react-transition-group';

export default function MiniModal({ children, title, pageHeader }) {
  const history = useHistory();
//   const [slide, setslide] = useState("slideDown");
const props = useSpring({transform: "translateY(-50%)", from: {transform: "translateY(-200%)"}})



  return (
      <animated.div className="miniModal" style={props}>
        <div className="topBars">
          {pageHeader}
          <h1 className="titles2">{title}</h1>
        </div>
        <div className="Modals">
          <div className="text2">{children}</div>
          <div className="bottomBars" onClick={() => {history.push("/");}}>
          close
        </div>
        </div>
      </animated.div>
  );
}
