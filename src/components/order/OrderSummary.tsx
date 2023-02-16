import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./OrderSummary.module.css";
import OrderSummaryItem, {OrderSummaryTotal} from "./OrderSummaryItem";

const OrderSummary = () => {
  const context = useContext(CartContext);
  const items = Object.keys(context.items).map((id) => (
    <OrderSummaryItem
      key={id}
      name={context.items[id].name}
      price={context.items[id].price}
      quantity={context.items[id].quantity}
    />
  ));
  items.push(<OrderSummaryTotal key="total" total={context.totalCost}/>)

  return (
    <div className={classes.summary}>
      <ul>{items}</ul>
    </div>
  );
};

export default OrderSummary;
