import Card from "../ui/Card";
import classes from "./OrderCard.module.css";
import OrderSummary from "./OrderSummary";

const OrderCard = () => {
  return (
    <Card>
      <span className={classes.title}>Your order</span>
      <OrderSummary />
    </Card>
  );
};

export default OrderCard;
