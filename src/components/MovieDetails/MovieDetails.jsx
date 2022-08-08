import PropTypes from 'prop-types';
import {
  InfoBox,
  MovieInfo,
  MovieItem,
  MovieLabel,
  MoreLink,
  MoreInfo,
} from './MovieDetails.styled';

export const MovieDetails = ({
  film: { poster_path, release_date, vote_average, genres, title, overview },
  movieId,
  backFrom,
}) => {
  const filmPoster = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20121003093557%21No_image_available.svg';

  const releaseDate = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(e => e.name).join(', ');

  return (
    <>
      <MovieInfo>
        <img src={filmPoster} alt={title} width={300} height={450} />
        <InfoBox>
          <MovieItem>
            <h1>
              {title} ({releaseDate})
            </h1>
            <p>User Score: {userScore}%</p>
          </MovieItem>
          <MovieItem>
            <MovieLabel>Overview</MovieLabel>
            <p>{overview}</p>
          </MovieItem>
          <MovieItem>
            <MovieLabel>Genres</MovieLabel>
            <p>{genresList}</p>
          </MovieItem>
        </InfoBox>
      </MovieInfo>
      <MoreInfo>
        <p>More information</p>
        <ul>
          <li>
            <MoreLink
              to={`/movies/${movieId}/cast`}
              state={{ from: backFrom.current }}
            >
              --- Cast ---
            </MoreLink>
          </li>
          <li>
            <MoreLink
              to={`/movies/${movieId}/reviews`}
              state={{ from: backFrom.current }}
            >
              --- Reviews ---
            </MoreLink>
          </li>
        </ul>
      </MoreInfo>
    </>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  movieId: PropTypes.string.isRequired,
  backFrom: PropTypes.object.isRequired,
};
