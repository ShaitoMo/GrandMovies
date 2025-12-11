import TopBar from "./topbar";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      {/* Top bar spans the top, not part of the flex row */}
      <TopBar />

      {/* Row: sidebar + main content */}
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: 10,          // adjust for AppBar height
            px: { xs: 2 },   // horizontal padding
            minWidth: 0,     // prevents flex item from forcing overflow
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
