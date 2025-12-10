import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMoviesApi, getMovieByIdApi } from "../api/ombd";

// Optional: add small wait for smoother loading UX
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// SEARCH MOVIES
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (term) => {
    await wait(1000); // 👈 force 1 second loader

    const trimmed = term.trim();

    if (trimmed.length < 3) {
      throw new Error("Please enter at least 3 characters.");
    }

    const results = await searchMoviesApi(trimmed);
    return results;
  }
);

// FETCH MOVIE BY ID
export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (imdbID) => {
    await wait(1000); // 👈 force 1 second loader

    const movie = await getMovieByIdApi(imdbID);
    return movie;
  }
);
