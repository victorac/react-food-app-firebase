import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import ProgressIndicator from "../ui/ProgressIndicator";
import FoodItem from "./FoodItem";
import classes from "./FoodList.module.css";

const DUMMY_OBJECT = {
  m1: {
    description: "Finest fish and veggies",
    name: "Sushi",
    price: 22.99,
  },
  m2: {
    description: "A german specialty!",
    name: "Schnitzel",
    price: 16.5,
  },
  m3: {
    description: "American, raw, meaty",
    name: "Barbecue Burger",
    price: 12.99,
  },
  m4: {
    description: "Healthy...and green...",
    name: "Green Bowl",
    price: 18.99,
  },
};

const FoodList: React.FC = () => {
  const [foodItems, setFoodItems] = useState<Record<string, any>>({});
  const URL = `${import.meta.env.VITE_API_URL}meals.json`;
  const { isLoading, error, fetchData } = useFetch();
  useEffect(() => {
    const getFoodItems = async () => {
        const data = await fetchData(`${URL}`, { method: "GET" });
      // const data = DUMMY_OBJECT;
      setFoodItems(data);
    };
    getFoodItems();
  }, []);

  if(error !== null) {
    return <p className={classes.errorMessage}>{error}</p>
  }
  const listContent = Object.keys(foodItems).map((id) => (
    <FoodItem
      key={id}
      id={id}
      name={foodItems[id].name}
      description={foodItems[id].description}
      price={foodItems[id].price}
    />
  ));
  return (
    <>
      {isLoading ? (
        <ProgressIndicator />
      ) : (
        <ul className={classes.list}>{listContent}</ul>
      )}
    </>
  );
};

export default FoodList;
