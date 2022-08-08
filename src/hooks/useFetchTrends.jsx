import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';

export const useFetchTrends = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrends();

        setFilms(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { films, error };
};
