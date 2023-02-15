export type Item = {
  id: string;
  name: string;
  price: string;
};

export type CartItem = Item & { quantity: number };
