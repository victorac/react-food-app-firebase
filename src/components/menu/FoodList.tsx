import { useCallback, useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";

const FoodList = () => {
  const [foodItems, setFoodItems] = useState<Record<string, any>>({});
  const URL = `${import.meta.env.VITE_API_URL}.json`;
  const { isLoading, error, fetchData } = useFetch();
  useEffect(() => {
    const getFoodItems = async () => {
      const data = await fetchData(`${URL}`, { method: "GET" });
      setFoodItems(data);
    };
    getFoodItems();
  }, []);
  const content = Object.keys(foodItems).map(item => <li>{foodItems[item].name}</li> )
  console.log(foodItems);
  return <ul>
    {content}
  </ul>;
};

export default FoodList;
