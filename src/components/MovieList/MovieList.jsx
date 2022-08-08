import PropTypes from 'prop-types';
import { useLocation, generatePath } from 'react-router-dom';
import { LinkItem, LinkStyled } from './MovieList.styled';

export const MovieList = ({ movieId, title }) => {
  const location = useLocation();
  const movieLink = generatePath(`/movies/${movieId}`, { movieId });

  return (
    <>
      <LinkItem key={movieId}>
        <LinkStyled to={movieLink} state={{ from: location }}>
          {title}
        </LinkStyled>
      </LinkItem>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
