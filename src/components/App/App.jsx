import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('components/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage.jsx'),
);
const NotFoundView = lazy(() =>
  import('components/NotFoundView/NotFoundView.jsx'),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
