import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.imdbID}`);
  };

  return (
    <Card
      sx={{
        width: 220,           // FIXED width for every card
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
          sx={{ objectFit: "cover" }}    // ensures consistent look
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
