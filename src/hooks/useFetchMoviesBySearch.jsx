import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';

export const useFetchMoviesBySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setSearchParams({ search });

    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesBySearch(search);

        setFilms(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [search, setSearchParams]);

  return { setSearch, films, error };
};
