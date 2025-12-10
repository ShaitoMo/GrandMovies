import { AppBar, Toolbar, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" }, // center on mobile, left on desktop
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          IMDB Movie Browser
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
