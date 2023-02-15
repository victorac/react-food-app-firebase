import { useContext, useState } from "react";
import cartIcon from "../../assets/material_cart.svg";
import CartContext from "../../store/cart-context";
import OrderModal from "../order/OrderModal";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const [display, setDisplay] = useState(false);
  const clickHandler = () => {
    setDisplay(true);
  };
  const onDismiss = () => {
    setDisplay(false);
  };
  const context = useContext(CartContext);
  const itemCount = Object.keys(context.items)
    .map((id) => context.items[id].quantity)
    .reduce((acc, val) => acc + val, 0);
  return (
    <>
      <OrderModal display={display} onDismiss={onDismiss} />
      <button className={classes.cardButton} onClick={clickHandler}>
        <img src={cartIcon} className={classes.cartIcon} />
        <span>Your cart</span>
        <div className={classes.badge}>{itemCount}</div>
      </button>
    </>
  );
};

export default CartButton;
