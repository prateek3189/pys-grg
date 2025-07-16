import React from "react";
import Button from "./Button";

const ToDoItem = ({ item }) => {
  return (
    <li>
      <div>{item.title}</div>
      <Button>Complete</Button>
    </li>
  );
};

export default ToDoItem;
