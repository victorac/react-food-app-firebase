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
  updateQuantity: (id: string, price:string, value: number) => void;
  totalCost: number;
}

const initialValue = {
  items: {},
  updateItem: () => {},
  updateQuantity: () => {},
  totalCost: 0,
};

const CartContext = React.createContext<Cart>(initialValue);

interface Props {
  children: React.ReactNode;
}

const copyCartItems = (items: CartItems) => {
  const copiedItems: Record<string, CartItem> = {};
  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      const item = items[key];
      copiedItems[key] = { ...item };
    }
  }
  return copiedItems;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<CartItems>({} as CartItems);
  const [totalCost, setTotalCost] = useState(0);
  const updateQuantity = (id: string, price:string, value: number) => {
    setItems((prev) => {
      const auxItems = copyCartItems(prev);
      auxItems[id].quantity += value;
      if (auxItems[id].quantity <= 0) {
        delete auxItems[id];
      }
      return auxItems;
    });
    setTotalCost((prev) => Math.max(prev + value * Number(price), 0));
  };
  const updateItem = (
    id: string,
    name: string,
    price: string,
    quantity: number
  ) => {
    setTotalCost((prev) => Math.max(prev + quantity * Number(price), 0));
    setItems((prev) => {
      const auxItems = copyCartItems(prev);
      const prevQuantity = auxItems[id]?.quantity ?? 0;
      const newItem: CartItem = {
        id,
        name,
        price,
        quantity: prevQuantity + quantity,
      };
      if (newItem.quantity <= 0) {
        delete auxItems[id];
      } else {
        auxItems[id] = newItem;
      }
      return auxItems;
    });
  };
  return (
    <CartContext.Provider value={{ items, updateItem, updateQuantity, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
