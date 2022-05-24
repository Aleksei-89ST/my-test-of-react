import { useState } from "react";

// с помощью этого хука я обработал индикатор загрузки,обработка ошибки и выполнение какого-то callback
const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
export default useFetching;
