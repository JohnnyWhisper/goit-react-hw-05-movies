import { MovieList } from 'components/MovieList/MovieList';
import { useFetchTrends } from 'hooks/useFetchTrends';

const HomePage = () => {
  const { films, error } = useFetchTrends();
  return (
    <>
      <h1>Trending movies</h1>
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieList key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default HomePage;
