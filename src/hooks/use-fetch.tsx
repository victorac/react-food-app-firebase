import { useCallback, useState } from "react";

type fetchPayload = {
  method: string;
  body?: any;
  headers?: Record<string, string>;
};

type jsonResponse = Record<string, any> | null;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string, payload: fetchPayload) => {
    setError(null);
    setIsLoading(true);
    let data: jsonResponse = {};
    try {
      const response = await fetch(url, payload);
      if (!response.ok) {
        throw new Error("Fetching error!");
      }
      data = ((await response.json()) as jsonResponse) ?? [];
    } catch (error) {
      console.log((error as Error).message);
      setError((error as Error).message);
    }
    setIsLoading(false);
    return data;
  }, []);

  return { isLoading, error, fetchData };
};

export default useFetch;
