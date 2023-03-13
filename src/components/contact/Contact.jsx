import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";
import isEmail from "validator/es/lib/isEmail";

const Contact = () => {
  const form = React.createRef();
  const [email, setEmail] = useState({});
  const [enabled, setEnabled] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (enabled) {
      emailjs.sendForm(
        "service_7trhgxv",
        "template_put9mjq",
        form.current,
        "PLYznn9s5qzQv9MrE"
      );
      e.target.reset();
    } else
      alert(
        "Check if your Email Address is correct or every field is complete"
      );
  };
  const controlledEmailHandler = (e) =>
    setEmail({ ...email, [e.target.name]: e.target.value });
  useEffect(() => {
    setEnabled(
      !!email.name && !!email.email && isEmail(email.email) && !!email.message
    );
  }, [email]);
  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact Me</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
        onChange={controlledEmailHandler}
      />
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        required
        onChange={controlledEmailHandler}
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        onChange={controlledEmailHandler}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default Contact;
