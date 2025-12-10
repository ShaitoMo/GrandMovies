import SearchBar from "../components/searchBar";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";
import Loader from "../components/loader";
import NoResults from "../components/noResults";
import styles from "./Search.module.css";
import { useState } from "react";


export default function Search() {
  const [firstLoad, setFirstLoad] = useState(true);
  const { searchResults, loading, error } = useSelector(
    (state) => state.movies
  );

  return (
    <div className="container">
      <div className="header">
        <h2 className="pageTitle">🎬 Search Movies</h2>
        <p className="pageSubtitle">
          Find movies by title, year, or keywords.
        </p>
      </div>

      <div className="searchSection">
        <SearchBar />
      </div>

      {loading && !firstLoad && <Loader />}



      {!loading && searchResults.length === 0 && <NoResults />}

      {searchResults.length > 0 && (
        <div className="moviesContainer">
          <Grid container spacing={2}>
            {searchResults.map((movie) => (
              <Grid
                item
                key={movie.imdbID}
                xs={12}     // 1 per row on phones
                sm={6}      // 2 per row on small screens
                md={4}      // 3 per row on medium
                lg={3}      // 4 per row on large
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
