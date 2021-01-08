import React from "react";
import Modal from "../Modal/Modal.js";
import Art from "./image/oneanother.png";

export default function ValuesContent() {
  return (
    <Modal title="Personal Values">
      <div>
        <h1 style={{ marginTop: "3rem" }}> I have a passion for art.</h1>
        <br />
        <img
          src={Art}
          alt="img"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "2rem",
            maxWidth: "30rem",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
          }}
        />
        <br />
        In my definition, art is a way to help people by empathizing creatively
        through various mediums like drawing, music, and even business. Art is a
        form of self-expression and therefore, art in the form of a business
        means that the vision of the organization is the extension of who you
        are, solving a problem that you are passionate about because you want to
        help those you believe in no matter how niche or seemingly unprofitable
        the business may be.
        <br />
        <br />
        Seth Godin, the best-selling author of leadership and marketing books
        talks about art from a business perspective, calling art a “generous
        contribution” that is extremely valued in the 21st century because
        appealing to the small, unexplored market can open up new doors to
        innovation.
        <br />
        <br />
        As an artist and a designer, I want to continue supporting artists with
        my skills and keep on pursuing art throughout my career.
      </div>
    </Modal>
  );
}
