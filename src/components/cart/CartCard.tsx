import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../ui/Card";
import classes from "./CartCard.module.css";
import CartItem from "./CartItem";

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
  const onUpdateItem = (id: string, price: string, value: number) => {
    context.updateQuantity(id, price, value);
  };

  const isEmpty = Object.keys(context.items).length === 0;
  let content: any = <p className={classes.textInfo}>The cart is empty</p>;
  if (!isEmpty) {
    content = Object.keys(context.items).map((id) => (
      <CartItem
        key={id}
        id={id}
        name={context.items[id].name}
        price={context.items[id].price}
        quantity={context.items[id].quantity}
        onUpdateItem={onUpdateItem}
      />
    ));
  }

  return (
    <Card className={classes.cartCard}>
      <span className={classes.title}>Your cart</span>
      <ul className={classes.itemList}>{content}</ul>
      <div className={classes.total}>
        <h3>Total</h3>
        <span>${context.totalCost.toFixed(2)}</span>
      </div>
      <div className={classes.action}>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={orderHandler} disabled={isEmpty}>
          Order
        </button>
      </div>
    </Card>
  );
};

export default CartCard;
