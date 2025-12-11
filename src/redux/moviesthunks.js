import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMoviesApi, getMovieByIdApi } from "../api/ombd";


function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (term) => {
    await wait(1000); 

    const trimmed = term.trim();

    if (trimmed.length < 3) {
      throw new Error("Please enter at least 3 characters.");
    }

    const results = await searchMoviesApi(trimmed);
    return results;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (imdbID) => {
    await wait(1000); 

    const movie = await getMovieByIdApi(imdbID);
    return movie;
  }
);
