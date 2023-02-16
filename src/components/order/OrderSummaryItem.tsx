import classes from "./OrderSummaryItem.module.css";

interface Props {
  name: string;
  quantity: number;
  price: string;
}

const OrderSummaryItem: React.FC<Props> = ({ name, quantity, price }) => {
  return (
    <li className={classes.item}>
      <span>
        {quantity} x {name}
      </span>
      <span>${(Number(price) * quantity).toFixed(2)}</span>
    </li>
  );
};

interface TotalProps {
  total: number;
}
export const OrderSummaryTotal: React.FC<TotalProps> = ({ total }) => {
  return (
    <li className={`${classes.item} ${classes.total}`}>
      <span className={classes.title}>Total</span>
      <span className={classes.title}>${total.toFixed(2)}</span>
    </li>
  );
};

export default OrderSummaryItem;
