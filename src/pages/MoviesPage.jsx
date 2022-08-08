import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchMoviesBySearch } from 'hooks/useFetchMoviesBySearch';

const MoviesPages = () => {
  const { setSearch, films, error } = useFetchMoviesBySearch();

  return (
    <>
      <SearchForm onSearch={setSearch} />
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieList key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default MoviesPages;
