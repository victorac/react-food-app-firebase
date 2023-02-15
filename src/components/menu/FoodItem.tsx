import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
interface Props {
  name: string;
  description: string;
  price: string;
}

const FoodItem: React.FC<Props> = ({ name, description, price }) => {
  const ref = useRef<HTMLInputElement>(null);
  const context = useContext(CartContext);
  const addHandler = () => {
    const quantity = ref.current?.value;
    if (quantity === undefined) {
      return;
    }
    // use context to add item
    context.updateItem("m1", "Sushi", "9.99", 1);
  }
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
