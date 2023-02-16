import classes from "./CartItem.module.css";

interface Props {
  id: string;
  name: string;
  price: string;
  quantity: number;
  onUpdateItem: (id: string, price: string, quantity: number) => void;
}

const CartItem: React.FC<Props> = ({
  id,
  name,
  price,
  quantity,
  onUpdateItem,
}) => {
  const subtractHandler = () => {
    onUpdateItem(id, price, -1);
  };
  const addHandler = () => {
    onUpdateItem(id, price, 1);
  };
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
      <div className={classes.action}>
        <button onClick={subtractHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
