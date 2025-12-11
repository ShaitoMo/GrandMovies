import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";

import { searchMovies } from "../redux/moviesThunks";
import { setSearchTerm } from "../redux/moviesSlice";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.movies.searchTerm);

  const debouncedTerm = useDebounce(searchTerm, 1000) ; // 1 seconds debounce

  useEffect(() => {
    const term = debouncedTerm.trim();
    if (term.length >= 3) {
      dispatch(searchMovies(term));
    }
  }, [debouncedTerm, dispatch]);

  function handleChange(e) {
    dispatch(setSearchTerm(e.target.value));
  }

  function handleSearch() {
    const term = searchTerm.trim();

    if (term.length < 3) {
      alert("Please type at least 3 characters.");
      return;
    }

    dispatch(searchMovies(term));
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        maxWidth: 600,
        mt: 2,
        mb: 3,
      }}
    >
      <TextField
        fullWidth
        label="Search Movies"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ minWidth: "120px" }}
      >
        Search
      </Button>
    </Box>
  );
}
