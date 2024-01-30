import { useEffect, useState } from 'react';

export const sleep = (ms) => {
  const start = performance.now();

  while (performance.now() - start < ms);
};

export default function useData(url, defaultValue = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);

        setData(defaultValue);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
