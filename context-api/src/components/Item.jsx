import React, { useContext } from "react";
import "./item.css";
import { CartContext } from "../context/Cart";

export default function Item({ name, price }) {
  const { quantity, setQuantity } = useContext(CartContext);
  return (
    <div className="item">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <p>
        <button onClick={() => setQuantity(quantity + 1)}>Add to Cart</button>
      </p>
    </div>
  );
}
