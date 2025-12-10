import { createSlice } from '@reduxjs/toolkit';
import { searchMovies, fetchMovieById } from './moviesThunks';

const initialState = {
  searchTerm: '',
  searchResults: [],      
  selectedMovie: null,   
  recentMovies: [],      
  loading: false,
  error: null,
};


const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
    // add/refresh recent movie list (max 10, unique by imdbID)
    addRecentMovie(state, action) {
      const movie = action.payload; // minimal { imdbID, Title, Year, Poster }

      // remove if already exists
      state.recentMovies = state.recentMovies.filter(
        (m) => m.imdbID !== movie.imdbID
      );

      // add to front
      state.recentMovies.unshift(movie);

      // limit to 10
      if (state.recentMovies.length > 10) {
        state.recentMovies = state.recentMovies.slice(0, 10);
      }
    },
    setRecentMovies(state, action) {
      state.recentMovies = action.payload || [];
    },
  },
  extraReducers: (builder) => {
    builder
      // searchMovies
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.searchResults = [];
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Search failed';
        state.searchResults = [];
      })
      // fetchMovieById
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load movie details';
      });
  },
});

export const {
  setSearchTerm,
  clearSelectedMovie,
  addRecentMovie,
  setRecentMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
