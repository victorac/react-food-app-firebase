import Card from "../ui/Card";
import classes from "./CartCard.module.css";

interface Props {
  onOrder: VoidFunction;
  onCancel: VoidFunction;
}

const CartCard: React.FC<Props> = ({ onOrder, onCancel }) => {
  const orderHandler = () => {
    onOrder();
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <Card className={classes.cartCard}>
      <span className={classes.title}>Your cart</span>
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={orderHandler}>Confirm</button>
      </div>
    </Card>
  );
};

export default CartCard;
