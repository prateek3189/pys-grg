import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, value }) => {
  return (
    <button className={`btn`} onClick={onClick} value={value}>
      {children}
    </button>
  );
};
