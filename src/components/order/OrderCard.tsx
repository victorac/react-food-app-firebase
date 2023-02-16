import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../ui/Card";
import classes from "./OrderCard.module.css";
import OrderForm from "./OrderForm";
import OrderSummary from "./OrderSummary";

interface Props {
  onCancel: VoidFunction;
}

const OrderCard: React.FC<Props> = ({ onCancel }) => {
  const context = useContext(CartContext);
  const confirmHandler = (name: string, address:string) => {
    
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <Card className={classes.orderCard}>
      <span className={classes.title}>Your order</span>
      <OrderSummary />
      <OrderForm onSubmit={confirmHandler} />
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </Card>
  );
};

export default OrderCard;
