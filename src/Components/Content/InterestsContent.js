import React from "react";
import Modal from "../Modal/Modal.js";
import AtomicHabits from "./image/AtomicHabits.jpg";
import Naoko from "./image/Naoko.jpg";

export default function InterestsContent() {
  return (
    <Modal title={"Interests"}>
      <div>
        <br />
        <b>
          My hobbies consist of reading books, exercising, and handicrafts like
          sewing, embroidering, and crocheting.
        </b>{" "}
        On this platform, I will be introducing you to my favorite English
        and Japanese books.
        <br />
        <br />
        <h2 style={{ color: "orange" }}>Atomic Habits by James Clear</h2>
        <div
          style={{
            display: "grid",
            gap: "0.2rem",
            gridTemplateColumns: "repeat(auto-fit, minMax(240px, 1fr))",
          }}
        >
          <img
            src={AtomicHabits}
            alt="img"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "60%",
              height: "auto",
              maxWidth: "20rem",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              padding: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <b> “Success is the product of daily habits—not once-in-a-lifetime
            transformations.” <br/> - James Clear </b>
          </div>
        </div>
        <br />
        For a self-development book, I highly recommend Atomic Habits by James
        Clear, a book about effective habit-forming. Out of all the
        self-development books I read, this book became my bible for everyday
        life and the ideas introduced in the book are eye-opening. Here is the
        link to a summary of the book for those of you who are interested.
        <br />
        <h2 style={{ color: "orange", textAlign: "left" }}>
          Naoko by Keigo Higashino
        </h2>
        <div
          style={{
            display: "grid",
            gap: "0.2rem",
            gridTemplateColumns: "repeat(auto-fit, minMax(240px, 1fr))",
          }}
        >
            <img
            src={Naoko}
            alt="img"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "60%",
              height: "auto",
              maxWidth: "20rem",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              padding: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <b>"Yes, Heisuke nodded, a sign of him burrying the secret forever in
              his heart."<br/>- Keigo Higashino (Quote translated by me)</b> 
          </div>
        </div>
        <br />
        For a fiction novel, I want to push Naoko by Keigo Higashino, a japanese
        psychological mystery novel that reveals the complicated emotion of a
        father, who lost his wife in an accident, finding out that his wife’s
        soul transferred to the daughter who survived the incident. This book
        left me thinking about people’s different ways of expressing love amid
        emotional and psychological chaos.
        <br />
        <br />
        For those of you who are interested, I post weekly journals talking
        about the things I learned from people and books in addition to my
        personal hobbies and interests
        <a rel="noopener noreferrer" href="https://vocal.media/authors/kazuki-mori-243bf016a" target="_blank"> on this platform</a>
        {/* <a href="/faq"> on this website</a> */}
      </div>
    </Modal>
  );
}
