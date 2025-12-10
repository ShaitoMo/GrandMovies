import TopBar from "./topbar";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 10,
          px: { xs: 2, },           // padding: small on mobile, bigger on desktop
          ml: { xs: 0, },      // no left offset on mobile, offset on desktop
      
      
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
