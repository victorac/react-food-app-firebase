import classes from "./MenuHeader.module.css";
import cartIcon from "../../assets/material_cart.svg";

const MenuHeader = () => {
  return (
    <div className={classes.header}>
      <span className={classes.title}>Food app</span>
      <button className={classes.cardButton}>
        <img src={cartIcon} className={classes.cartIcon} />
        <span>Your cart</span>
        <div className={classes.badge}>
          {2}
        </div>
      </button>
    </div>
  );
};

export default MenuHeader;
