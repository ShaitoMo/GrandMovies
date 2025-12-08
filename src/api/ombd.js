const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

async function request(params) {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  }).toString();

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Network error');
  }
  const data = await res.json();
  if (data.Response === 'False') {
    throw new Error(data.Error || 'OMDb error');
  }
  return data;
}

export async function searchMoviesApi(term) {
  const data = await request({ s: term.trim(), type: 'movie' });
  return data.Search || [];
}

export async function getMovieByIdApi(imdbID) {
  const data = await request({ i: imdbID, plot: 'full' });
  return data;
}
