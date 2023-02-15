import React, { useState } from "react";
import { CartItem } from "../types";

type CartItems = Record<string, CartItem>;

interface Cart {
  items: CartItems;
  updateItem: (
    id: string,
    name: string,
    price: string,
    quantity: number
  ) => void;
  totalCost: number;
}

const initialValue = {
  items: {},
  updateItem: () => {},
  totalCost: 0,
};

const CartContext = React.createContext<Cart>(initialValue);

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<CartItems>({} as CartItems);
  const [totalCost, setTotalCost] = useState(0);
  const updateItem = (
    id: string,
    name: string,
    price: string,
    quantity: number
  ) => {
    setItems((prev) => {
      const prevQuantity = prev[id]?.quantity ?? 0;
      console.log(prevQuantity);
      const updatedItem: CartItem = {
        id,
        name,
        price,
        quantity: prevQuantity + quantity,
      };
      setTotalCost((prev) =>
        Math.min(prev + updatedItem.quantity * Number(price), 0)
      );
      if (updatedItem.quantity <= 0) {
        delete prev[id];
        return { ...prev };
      }
      return { ...prev, id: updatedItem };
    });
  };
  console.log(items);
  return (
    <CartContext.Provider value={{ items, updateItem, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
