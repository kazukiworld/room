import Modal from "../../Modal/Modal.js";
import React, { useState } from "react";
import "./FeaturedContent.css";
import { CSSTransition } from "react-transition-group";
import WebPic1 from "./Kazukisworldimage.png";

const ContentBlock = (props) => {
  return (
    <div>
      <b style={{ textAlign: "center", width: "100%", fontSize:"3vh"}}> {props.title}</b>
      <br />
      <p>
      <div>{props.visual}</div>
      <br />
      <b>Contribution:</b>
      {props.points}
      <br />
      <b>Description:</b>
      <br />
      {props.description}
      <div style={{ margin: "4rem" }}></div>
      </p>
    </div>
  );
};

function WebDevSlide() {
  return (
    <div className="webdevSlide">
      <h2 style={{ color: "rgb(92, 116, 255)" }}>Web Development</h2>
      <ContentBlock
        className="contentBlock"
        title={
          "Kazuki’s World - 3D Digital Portfolio"
        }
        visual={
          <img
            src={WebPic1}
            alt="img"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          />
        }
        points={
          <p>
            - 3D environment design 
            <br/>
            - web implementations
            <br />- Written content
          </p>
        }
        description={
          "A 14-day personal project exploring the capabilities of 3d web implementations."
        }
      />
    </div>
  );
}

function AnimationSlide() {
  return (
    <div className="animationSlide">
      <h2 style={{ color: " rgb(255, 98, 125)" }}>Animation</h2>
      <ContentBlock
        className="contentBlock"
        title={
          "Fade to Black - Video documentary series about how people face the end of life"
        }
        visual={
          <div>
            <br/>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0",
              }}
              title="Fade to Black"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/D_uHoLojUlY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </div>
        }
        points={
          <p>
            - 2d animation
            <br />- storyboarding
          </p>
        }
        description={
          "A month-long 2d animation project with a Singaporean filmmaker, illustrating a story behind people’s emotions and experiences through visual storytelling."
        }
      />
    </div>
  );
}

export default function FeaturedContent() {
  const [page, setPage] = useState("webdev");

  return (
    <Modal
      title="Featured Project"
      pageHeader={
        <div className="buttonBar">
          <div
            className="webdevButton"
            onClick={() => {
              setPage("webdev");
            }}
          >
            <h1 style={{ fontSize: "2.2vh" }}>Web Development</h1>
          </div>
          <CSSTransition
            in={page === "webdev"}
            timeout={500}
            classNames="underline"
            unmountOnExit
          >
            <div className="underline" />
          </CSSTransition>
          <CSSTransition
            in={page === "animation"}
            timeout={500}
            classNames="underline2"
            unmountOnExit
          >
            <div className="underline2" />
          </CSSTransition>
          <div
            className="animationButton"
            onClick={() => {
              setPage("animation");
            }}
          >
            <h1 style={{ fontSize: "2.2vh" }}>Animation</h1>
          </div>
        </div>
      }
    >
      <CSSTransition
        in={page === "webdev"}
        timeout={500}
        classNames="slideAnimation"
        unmountOnExit
      >
        <WebDevSlide />
      </CSSTransition>
      <CSSTransition
        in={page === "animation"}
        timeout={500}
        classNames="slideAnimation2"
        unmountOnExit
      >
        <AnimationSlide />
      </CSSTransition>
    </Modal>
  );
}
