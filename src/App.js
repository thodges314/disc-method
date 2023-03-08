import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { makeStyles } from "@mui/material";
import Container from "@mui/material/Container";
import { CssBaseline, GlobalStyles } from "@mui/material";
import loadable from "@loadable/component";
import { MathJaxContext, MathJax } from "better-react-mathjax";

import { MenuDrawer, TopMenu } from "components";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";

const LoadablePage = loadable(
  ({ itm1, itm2 }) =>
    import(`pages/${toPascalCase(itm1.name)}/${toPascalCase(itm2)}`),
  {
    fallback: <div>Hello, This page is Loading...</div>,
  }
);

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pages = {};
  items.forEach((itm) => {
    itm.items.forEach(async (itm2) => {
      pages[toPascalCase(itm2)] = <LoadablePage itm1={itm} itm2={itm2} />;
    });
  });

  const routes = [];
  items.forEach((itm, idx) => {
    itm.items.forEach((itm2, idx2) => {
      routes.push(
        <Route
          key={100 * idx + idx2}
          path={`/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`}
          element={pages[toPascalCase(itm2)]}
        />
      );
    });
  });

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
          <Routes>{routes}</Routes>
        </Container>
      </div>
    </MathJaxContext>
  );
}

export default App;
