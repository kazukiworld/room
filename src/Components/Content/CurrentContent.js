import React from "react";
import Modal from "../Modal/Modal.js";
import MEICReference from "./image/MeicPicture.PNG";

export default function CurrentContent() {
  return (
    <Modal title="Current Project">
      <img src={MEICReference} alt="img" style={{width:"100%", height:"auto"}}/>
      <p>
       <b>Fashion As Creative Experience (FACE):</b>  A solution-oriented fashion
        community aiming to tackle the negative social and environmental impact of the
        fashion industry by shifting the focus from products to creative
        experiences using technology.
        <br />
        <br />
        More information will be posted on a website coming soon... 
      </p>
    </Modal>
  );
}
