import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;   // set any width here

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:900px)");
  
  const navigate = useNavigate();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth, overflow: "hidden" }}>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemText primary="Search Movies" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/recent");
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemText primary="Recent Movies" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 2000,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: `${drawerWidth}px !important`,
              boxSizing: "border-box",
              overflowX: "hidden",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Desktop Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: `${drawerWidth}px !important`,
              boxSizing: "border-box",
              overflowX: "hidden",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
