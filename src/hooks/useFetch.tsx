import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }

    fetchData();
  }, [url]);

  return { data, error };
}

export default useFetch;