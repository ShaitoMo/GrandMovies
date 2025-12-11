import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import { fetchMovieById } from "../redux/moviesThunks";
import Loader from "../components/loader";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedMovie: movie, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieById(imdbID));
    }
  }, [imdbID, dispatch]);

  if (loading || !movie) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <Typography color="error">Error: {error}</Typography>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          ← Back to Search
        </Button>
      </div>

      <Grid container spacing={3}>
        {/* Poster */}
        <Grid item xs={12} md={4}>
          <div className={styles.posterWrapper}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={8}>
          <Typography className={styles.title}>{movie.Title}</Typography>

          <div className={styles.metaRow}>
            {movie.Year} {movie.Runtime && `• ${movie.Runtime}`}{" "}
            {movie.Rated && `• ${movie.Rated}`}
          </div>

          {movie.Genre && (
            <Typography variant="body1" sx={{ mb: 1, fontStyle: "italic" }}>
              {movie.Genre}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {movie.imdbRating && (
            <Typography variant="h6" sx={{ mb: 1 }}>
              IMDb Rating:{" "}
              <Typography component="span" color="primary" fontWeight={600}>
                {movie.imdbRating}
              </Typography>{" "}
              / 10
            </Typography>
          )}

          {movie.Plot && (
            <Box className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Plot</div>
              <div className={styles.sectionText}>{movie.Plot}</div>
            </Box>
          )}

          {movie.Director && (
            <Box className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Director</div>
              <div className={styles.sectionText}>{movie.Director}</div>
            </Box>
          )}

          {movie.Actors && (
            <Box className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Cast</div>
              <div className={styles.sectionText}>{movie.Actors}</div>
            </Box>
          )}

          {movie.Language && (
            <Box className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Language</div>
              <div className={styles.sectionText}>{movie.Language}</div>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
