import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { location } from "utils/utils";

const TopMenu = ({ toggleDrawer = () => {} }) => {
  const headerArray = location();

  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "space-between",
        position: "static",
      }}
    >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            // sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontVariant: "small-caps",
            }}
          >
            {headerArray[0]}
            {headerArray.length > 1 && headerArray[1] !== "" && (
              <>
                <ArrowForwardIosIcon
                  fontSize="small"
                  style={{ marginBottom: -2, marginLeft: 4, marginRight: 4 }}
                />
                {headerArray[1]}
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopMenu;
