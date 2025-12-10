import { Alert, AlertTitle, Box } from "@mui/material";

export default function NoResults() {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Alert severity="info" variant="outlined" sx={{ maxWidth: 600 }}>
        <AlertTitle>No Movies Found</AlertTitle>
        Try searching with a different movie title or refine your keywords.
      </Alert>
    </Box>
  );
}
