import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavItems from "./NavItems";
const drawerWidth = 240;

const MenuDrawer = ({ open = false, toggleDrawer = () => {} }) => {
  return (
    <Box component="nav">
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{
          // display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <NavItems />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
