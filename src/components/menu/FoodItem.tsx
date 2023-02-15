import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
interface Props {
  name: string;
  description: string;
  price: string;
}

const FoodItem: React.FC<Props> = ({ name, description, price }) => {
  return (
    <li className={classes.foodItem}>
      <div className={classes.foodInfo}>
        <span className={classes.title}>{name}</span>
        <span>{description}</span>
        <span>{price}</span>
      </div>
      <FoodItemForm />
    </li>
  );
};

export default FoodItem;
