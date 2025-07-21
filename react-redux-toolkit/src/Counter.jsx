import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h2>Counter</h2>
      <p>{counter.count}</p>
    </div>
  );
};

export default Counter;
