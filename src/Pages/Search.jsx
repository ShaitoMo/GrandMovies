import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";

import SearchBar from "../components/searchBar";
import MovieCard from "../components/MovieCard";
import Loader from "../components/loader";
import NoResults from "../components/noResults";

import styles from "./Search.module.css";

export default function Search() {
  const [firstLoad, setFirstLoad] = useState(true);

  const { searchResults, loading, error } = useSelector(
    (state) => state.movies
  );

  // After the first search starts loading, we are not on "first load" anymore
  useEffect(() => {
    if (loading) {
      setFirstLoad(false);
    }
  }, [loading]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.pageTitle}>🎬 Search Movies</h2>
        <p className={styles.pageSubtitle}>
          Find movies by title, year, or keywords.
        </p>
      </div>

      <div className={styles.searchSection}>
        <SearchBar />
      </div>

 
      {loading && <Loader />}

  
      {!loading && error && !firstLoad && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

    
      {!loading &&
        !error &&
        searchResults.length === 0 &&
        !firstLoad && <NoResults />}

   
      {searchResults.length > 0 && (
        <div className={styles.moviesContainer}>
          <Grid container spacing={2}>
            {searchResults.map((movie) => (
              <Grid
                item
                key={movie.imdbID}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
