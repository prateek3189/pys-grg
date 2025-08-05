import React from "react";

const MyButton: React.FC<{ text: string }> = ({ text }) => {
  return <button>{text}</button>;
};

export default MyButton;
