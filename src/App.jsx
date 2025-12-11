import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import SearchPage from "./Pages/Search.jsx";
import MovieDetails from "./Pages/MovieDetails.jsx";
import RecentMovies from "./Pages/RecentMovies.jsx";


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:imdbID" element={<MovieDetails />} />
        <Route path="/recent" element={<RecentMovies />} />
       
      </Routes>
    </Layout>
  );
}
