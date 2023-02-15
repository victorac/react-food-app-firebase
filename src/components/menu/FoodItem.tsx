import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
interface Props {
  id: string;
  name: string;
  description: string;
  price: string;
}

const FoodItem: React.FC<Props> = ({ id, name, description, price }) => {
  const ref = useRef<HTMLInputElement>(null);
  const context = useContext(CartContext);
  const addHandler = () => {
    const quantity = Number(ref.current?.value ?? 0);
    if (quantity === 0) {
      return;
    }
    context.updateItem(id, name, price, quantity);
  };
  return (
    <li className={classes.foodItem}>
      <div className={classes.foodInfo}>
        <span className={classes.title}>{name}</span>
        <span>{description}</span>
        <span>{price}</span>
      </div>
      <FoodItemForm ref={ref} onAdd={addHandler} />
    </li>
  );
};

export default FoodItem;
