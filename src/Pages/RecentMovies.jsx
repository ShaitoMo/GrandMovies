// ...existing code...
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import MovieCard from "../components/MovieCard";
import NoResults from "../components/noResults";
import { loadRecentMovies } from "../utils/localStorage";

import styles from "./Search.module.css";

export default function RecentMovies() {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    setRecentMovies(loadRecentMovies());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.pageTitle}>📺 Recent Movies</h2>
        <p className={styles.pageSubtitle}>Movies you viewed recently</p>
      </div>

      {recentMovies.length === 0 ? (
        <NoResults />
      ) : (
        <div className={styles.moviesContainer}>
          <Grid container spacing={2}>
            {recentMovies.map((movie) => (
              <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
