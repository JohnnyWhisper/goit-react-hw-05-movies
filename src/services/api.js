import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '827cb17c4a19aaac58b5a69a05bdba2b';

// Поиск по трендам самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchTrends = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};

// Поиск фильма по ключевому слову на странице фильмов
export const fetchMoviesBySearch = async name => {
  return await axios.get(`search/movie?api_key=${API_KEY}&query=${name}`);
};

//  Поиск по ID - запрос полной информации о фильме для страницы кинофильма
export const fetchMovieDetails = async id => {
  return await axios.get(`movie/${id}?api_key=${API_KEY}`);
};

// Запрос актеров
export const fetchCast = async id => {
  return await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
};

// Запрос обзоров о фильме
export const fetchReviews = async id => {
  return await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
};
