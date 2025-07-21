import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
