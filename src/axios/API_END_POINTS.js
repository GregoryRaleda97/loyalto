const API_KEY = process.env.REACT_APP_API_KEY;
// https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1
// https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  ListMovies: `${BASE_URL}/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`,
}

export default requests;
