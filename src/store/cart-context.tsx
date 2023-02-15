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
    setTotalCost((prev) => Math.min(prev + quantity * Number(price), 0));
    setItems((prev) => {
      const prevQuantity = prev[id]?.quantity ?? 0;
      const updatedItem: CartItem = {
        id,
        name,
        price,
        quantity: prevQuantity + quantity,
      };
      if (updatedItem.quantity <= 0) {
        delete prev[id];
        return { ...prev };
      }
      prev[id] = updatedItem;
      return { ...prev };
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
