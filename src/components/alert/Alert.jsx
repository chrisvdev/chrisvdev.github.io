import React, { useState } from "react";
import "./alert.css";

const Alert = (props) => {
  const { messages } = props.data;
  const [hide, setHide] = useState(false);
  return (
    <div className="alert" style={hide ? { display: "none" } : {}}>
      {messages.map((message, index) => (
        <p key={`message_${index}`}>{message}</p>
      ))}
      <button className="btn btn-primary" onClick={() => setHide(true)}>
        I understood
      </button>
    </div>
  );
};

export default Alert;
