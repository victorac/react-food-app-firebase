import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import ProgressIndicator from "../ui/ProgressIndicator";
import classes from "./FoodList.module.css";

const DUMMY_OBJECT = {
    "m1": {
        "description": "Finest fish and veggies",
        "name": "Sushi",
        "price": 22.99
    },
    "m2": {
        "description": "A german specialty!",
        "name": "Schnitzel",
        "price": 16.5
    },
    "m3": {
        "description": "American, raw, meaty",
        "name": "Barbecue Burger",
        "price": 12.99
    },
    "m4": {
        "description": "Healthy...and green...",
        "name": "Green Bowl",
        "price": 18.99
    }
}

const FoodList: React.FC = () => {
  const [foodItems, setFoodItems] = useState<Record<string, any>>({});
  const URL = `${import.meta.env.VITE_API_URL}.json`;
  const { isLoading, error, fetchData } = useFetch();
  useEffect(() => {
    const getFoodItems = async () => {
    //   const data = await fetchData(`${URL}`, { method: "GET" });
      const data = DUMMY_OBJECT
      setFoodItems(data);
    };
    getFoodItems();
  }, []);
  const listContent = Object.keys(foodItems).map((item) => (
    <li key={item}>{foodItems[item].name}</li>
  ));
  console.log(foodItems);
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
