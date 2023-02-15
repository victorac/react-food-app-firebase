import { useContext } from "react";
import cartIcon from "../../assets/material_cart.svg";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const context = useContext(CartContext);
  const itemCount = Object.keys(context.items)
    .map((id) => context.items[id].quantity)
    .reduce((acc, val) => acc + val, 0);
  return (
    <button className={classes.cardButton}>
      <img src={cartIcon} className={classes.cartIcon} />
      <span>Your cart</span>
      <div className={classes.badge}>{itemCount}</div>
    </button>
  );
};

export default CartButton;
