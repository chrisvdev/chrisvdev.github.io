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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chrisvill.2312@gmail.com</h5>
            <a
              href="mailto:chrisvill.2312@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@chrisvill23</h5>
            <a
              href="https://t.me/chrisvill23"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
      </div>
    </section>
  );
};

export default Contact;
