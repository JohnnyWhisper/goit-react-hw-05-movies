import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { cast },
        } = await fetchCast(movieId);
        setCredits(cast);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [movieId]);

  const getProfileImg = img => {
    return img
      ? `https://image.tmdb.org/t/p/original${img}`
      : 'https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20121003093557%21No_image_available.svg';
  };

  return (
    <>
      {error && <p>{error}</p>}
      {credits && (
        <ul>
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={getProfileImg(profile_path)}
                  alt={name}
                  width={150}
                  height={300}
                  loading="lazy"
                />
                <p>--- {name} ---</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
