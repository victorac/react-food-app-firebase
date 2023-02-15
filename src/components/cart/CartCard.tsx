import { useContext } from "react";
import CartContext from "../../store/cart-context";
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

  const context = useContext(CartContext);
  const content = Object.keys(context.items).map(id => <li key={id}>{context.items[id].name}</li>)

  return (
    <Card className={classes.cartCard}>
      <span className={classes.title}>Your cart</span>
      <ul>
        {content}
      </ul>
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={orderHandler}>Confirm</button>
      </div>
    </Card>
  );
};

export default CartCard;
