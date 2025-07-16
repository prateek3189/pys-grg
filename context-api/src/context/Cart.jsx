import { createContext, useState } from "react";

export const CartContext = createContext(0);

export const CartProvider = (props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {props.children}
    </CartContext.Provider>
  );
};
