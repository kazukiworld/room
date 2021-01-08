import React from "react";
import Modal from "../Modal/Modal.js";
import ProfilePic from "./image/Profile.jpg";


export default function IntroductionContent() {
  return (
    <Modal title="Introduction">
      <img src={ProfilePic} alt="img" style={{width:"100%", height: "auto", marginBottom:"2rem",}} />
      <div>
        <b>
          My name is Kazuki Mori, a freelance designer and artist who
          specializes in 3D/2D web development and animation, based in Hawaii.
        </b>
        <br />
        <br />
        <h1 className="center">Bio</h1>
        <br />
        <b>Aspirations:</b>
        <br />
        Supporting and becoming a part of innovative entrepreneurs who are
        driving positive social and environmental change.
        <br />
        <br />
        <b>Profession:</b>
        <br />
        Freelance designer, 3D/2D Web Developer and Animator
        <br />
        <br />
        <b>Primary Skills:</b>
        <br />
        - 3D and 2D Web Design
        <br />
        - Front-End Web Development
        <br />
        - 3D/2D Animation
        <br />
        <br />
        <b>Secondary Skills:</b>
        <br />
        - Some Back-End Web Development
        <br />
        - Bilingual: English and Japanese
        <br />
        - Graphic Design
        <br />
        - Illustration
        <br />
        - Logo Design
        <br />
        - UX/UI design
        <br />
        - Storyboarding
        <br />
        - Video Editing
        <br />
        <br />
        <b>Background:</b>
        Graduate of The Center for Tomorrow’s Leaders Fellows Program, a
        leadership development experience (2020)
        <br />
        <br />
        <div>
          <b><a href="mailto:kazukisworld@gmail.com">Contact: kazukisworld@gmail.com</a> </b>
        </div>
      </div>
    </Modal>
  );
}
