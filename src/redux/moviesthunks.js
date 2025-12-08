import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMoviesApi, getMovieByIdApi } from '../api/omdb';

// expects env: VITE_OMDB_API_KEY
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (term) => {
    const results = await searchMoviesApi(term);
    return results; 
  }
);

export const fetchMovieById = createAsyncThunk(
  'movies/fetchMovieById',
  async (imdbID) => {
    const movie = await getMovieByIdApi(imdbID);
    return movie; 
  }
);
