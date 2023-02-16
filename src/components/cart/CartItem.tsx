import classes from "./CartItem.module.css";

interface Props {
  name: string;
  price: string;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ name, price, quantity }) => {
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <span className={classes.title}>{name}</span>
        <div className={classes.value}>
          <span className={classes.price}>${price}</span>
          <div className={classes.badge}>
          <span>x{quantity}</span>
          </div>
          
        </div>
      </div>
    </li>
  );
};

export default CartItem;
