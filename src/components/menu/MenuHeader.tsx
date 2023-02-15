import CartButton from "../cart/CartButton";
import classes from "./MenuHeader.module.css";

const MenuHeader = () => {
  return (
    <div className={classes.header}>
      <span className={classes.title}>Food app</span>
      <CartButton />
    </div>
  );
};

export default MenuHeader;
