import React from "react";
import "./button.css";

export default function Button({ onClick, children, className, mark }) {
  return (
    <button
      onClick={onClick}
      className={`border h-8 w-fit border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-2 transition-all text-lg ${className}${
        mark ? " button" : ""
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </button>
  );
}
