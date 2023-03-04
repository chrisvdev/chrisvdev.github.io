import React from "react";

export default function LinkButton({ href, className = "", children }) {
  return (
    <a
      href={href}
      className={`border h-8 w-fit border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-2 transition-all text-lg ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
