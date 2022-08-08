import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const HomePage = lazy(() =>
  import('pages/HomePage')
);

const MoviesPage = lazy(() =>
  import('pages/MoviesPage')
);

const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage')
);

const Cast = lazy(() => import('../Cast/Cast'));

const Reviews = lazy(() =>
  import('../Reviews/Reviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
