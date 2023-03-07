import "./App.css";
import { useState } from "react";
// import { makeStyles } from "@mui/material";
import Container from "@mui/material/Container";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { MenuDrawer, TopMenu } from "components";
import { MathJaxContext, MathJax } from "better-react-mathjax";

// import { shadows } from "@mui/system";

// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <MathJaxContext>
      <div className="App">
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: "#e7ebf0" } }} />
        <TopMenu toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
        <MenuDrawer
          open={drawerOpen}
          toggleDrawer={() => setDrawerOpen(!drawerOpen)}
        />
        <Container maxWidth="lg" className="PrimaryContainer">
          Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
          <p /> Test
        </Container>
      </div>
    </MathJaxContext>
  );
}

export default App;
