import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { saveRecentMovie } from "../utils/localStorage";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

const handleClick = () => {
  saveRecentMovie({
    imdbID: movie.imdbID,
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
  });

  navigate(`/movies/${movie.imdbID}`);
};

  return (
    <Card
      sx={{
        width: 220,          
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="330"
          image={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
          sx={{ objectFit: "cover" }}   
        />

        <CardContent>
          <Typography variant="subtitle1" noWrap>
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
