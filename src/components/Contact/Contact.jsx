import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import "./contact.css";

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2t6sqc7",
      "template_cc6926g",
      form.current,
      "nvN2PUCCh1c8JlPRM"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
};
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="form" id="contact">
        <div className="contact-inputs">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="contact-inputs">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="contact-inputs">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
