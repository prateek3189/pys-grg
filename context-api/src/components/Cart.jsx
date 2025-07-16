import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

export default function Cart() {
  const { quantity } = useContext(CartContext);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div>Quantity: {quantity}</div>
    </div>
  );
}
