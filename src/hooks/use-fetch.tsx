import { useState } from "react";

type fetchPayload = {
  method: string;
  body?: any;
  headers?: Record<string, string>;
};

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAPI = async (url: string, payload: fetchPayload) => {
    setIsLoading(true);
    let data;
    try {
      const response = await fetch(url, payload);
      if (!response.ok) {
        throw new Error("Fetching error!");
      }
      data = response.json();
    } catch (error) {
      console.log((error as Error).message);
    }
    setIsLoading(false);
    return data;
  };

  return [isLoading, setIsLoading, fetchAPI];
};

export default useFetch;
