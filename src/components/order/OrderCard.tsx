import { useContext } from "react";
import useFetch from "../../hooks/use-fetch";
import CartContext from "../../store/cart-context";
import Card from "../ui/Card";
import ProgressIndicator from "../ui/ProgressIndicator";
import classes from "./OrderCard.module.css";
import OrderForm from "./OrderForm";
import OrderSummary from "./OrderSummary";

interface Props {
  onCancel: VoidFunction;
}

const OrderCard: React.FC<Props> = ({ onCancel }) => {
  const context = useContext(CartContext);
  const { isLoading, error, fetchData } = useFetch();
  const confirmHandler = async (name: string, address: string) => {
    const URL = `${import.meta.env.VITE_API_URL}orders.json`;
    const body = {
      items: Object.values(context.items),
      name: name,
      address: address,
    };
    const data = await fetchData(`${URL}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    onCancel();
    context.clear();
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <Card className={classes.orderCard}>
      <span className={classes.title}>Your order</span>
      <OrderSummary />
      {isLoading ? (
        <ProgressIndicator />
      ) : (
        <OrderForm onSubmit={confirmHandler} />
      )}
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </Card>
  );
};

export default OrderCard;
