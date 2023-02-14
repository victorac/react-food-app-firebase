import Card from "../ui/Card";
import classes from "./OrderCard.module.css";
import OrderSummary from "./OrderSummary";

interface Props {
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

const OrderCard:React.FC<Props> = ({onConfirm, onCancel}) => {

  const confirmHandler = () => {
    onConfirm()
  }

  const cancelHandler = () => {
    onCancel()
  }

  return (
    <Card className={classes.orderCard}>
      <span className={classes.title}>Your order</span>
      <OrderSummary />
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={confirmHandler} >Confirm</button>
      </div>
    </Card>
  );
};

export default OrderCard;
