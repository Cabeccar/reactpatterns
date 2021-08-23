import { useState, useEffect } from "react";
import { dataType, errorType } from "../Types";

const useFetch = (url: string) => {
  const [data, setData] = useState<dataType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<errorType>({
    hasError: false,
    message: "",
  });

  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (e) {
          debugger;
          setError({ hasError: true, message: e.message });
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };

    doFetch();
  }, [url]);

  return {
    data,
    isFetching,
    error,
  };
};

export default useFetch;
