import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from 'services/api';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export const useFetchMovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backFrom = useRef(backLinkHref);

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    const fetchData = async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setFilm(data);
      } catch (e) {
        if (e.response.status === 404) {
          return navigate(`/`);
        }
        setError(e.message);
      }
    };
    fetchData();
  }, [movieId, navigate]);

  return { film, error, backLinkHref, movieId, backFrom };
};
