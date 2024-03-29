import { Box, Divider, Drawer, Typography } from "@mui/material";
import NavItems from "./NavItems";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  themeBackground,
} from "interactivity/resources/constants/colors";
const drawerWidth = 240;

const backgroundColor = hexToRgba(themeBackground, 1);
const magentaHeavy = hexToRgba(synthSunsetMagenta, 1);

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

          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: backgroundColor,
          },
        }}
      >
        <Box
          sx={{
            bgcolor: backgroundColor,
            color: magentaHeavy,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            Topics
          </Typography>
          <Divider />
          <NavItems />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
