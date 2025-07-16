import React from "react";
import "./ToDos.css";
import ToDoItem from "./ToDoItem";

const TODO_ITEMS = [
  { id: 1, title: "To Do 1" },
  { id: 2, title: "To Do 2" },
  { id: 3, title: "To Do 3" },
];

const ToDos = () => {
  return (
    <div className="todo-list">
      <ul>
        {TODO_ITEMS.map((item) => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
