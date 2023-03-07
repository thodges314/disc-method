import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { makeStyles } from "@mui/material";
import Container from "@mui/material/Container";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { MenuDrawer, TopMenu } from "components";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import TestPage from "pages/TestPage";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";
import RootTest from "pages/RootTest";

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

// const routes = items.map((itm, idx) => {
//   itm.items.map((itm2, idx2) => (
//     <Route
//       key={100 * idx + idx2}
//       path={`/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`}
//       element={toPascalCase(itm.title)}
//     />
//   ));
// });
// return items.map((item, index) => {
//   return (
//     <Route
//       key={index}
//       path={item.path}
//       element={
//         <item.component
//           title={toPascalCase(item.title)}
//           description={item.description}
//         />
//       }
//     />
//   );
// });

// const sets = items.map((item, index) =>
//   item.items.map((item2, index2) => ({
//     key: 100 * index + index2,
//     path: `/${toPascalCase(item.name)}/${toPascalCase(item2)}`,
//     element: toPascalCase(item2),
//   }))
// );

const sets = items.reduce((acc, item, index) => {
  return acc.concat(
    item.items.map((item2, index2) => ({
      key: 100 * index + index2,
      path: `/${toPascalCase(item.name)}/${toPascalCase(item2)}`,
      element: toPascalCase(item2),
    }))
  );
}, []);

const routes = items.reduce(
  (acc, item, index) =>
    acc.concat(
      item.items.map((item2, index2) => (
        <Route
          key={100 * index + index2}
          path={`/${toPascalCase(item.name)}/${toPascalCase(item2)}`}
          // element={toPascalCase(item2)}
          // element={`<${toPascalCase(item2)}/>`}
          element={<item.component title={toPascalCase(item2)} />}
        />
      ))
    ),
  []
);

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log(routes);
  console.log(sets);
  console.log(
    items.reduce((acc, item, index) => {
      return `${acc} ${toPascalCase(item.name)}`;
    }, "")
  );
  console.log(
    items.reduce((acc, itm) => {
      const subString = itm.items.reduce((acc2, itm2) => {
        return `${acc2} ./${toPascalCase(itm.name)}/${toPascalCase(
          itm2
        )}/index.js`;
      }, "");
      return `${acc} ${subString}`;
    }, "")
  );
  console.log(
    items.reduce((acc, item, index) => {
      return `${acc} ./${toPascalCase(item.name)}/index.js`;
    }, "")
  );
  // 	console.log(  items.map((itm, idx) => {
  //     itm.items.map((itm2, idx2) => (
  // {
  //         key:{100 * idx + idx2},
  //         path:{`/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`},
  //         element:{toPascalCase(itm.name)}
  // }
  //     ));
  //   });)

  items.forEach((itm) =>
    console.log(
      `${itm.name}\n\n${itm.items.reduce(
        (acc, cv) =>
          `${acc}\n import ${toPascalCase(cv)} from './${toPascalCase(cv)}';`,
        ""
      )}`
    )
  );

  items.forEach((itm) =>
    console.log(
      `${itm.name}\n\nexport {${itm.items.reduce(
        (acc, cv) => `${acc}\n ${toPascalCase(cv)},`,
        ""
      )}}`
    )
  );

  console.log(
    items.reduce(
      (acc2, itm) =>
        `${acc2}\n\n import {${itm.items.reduce(
          (acc, cv) => `${acc}\n ${toPascalCase(cv)},`,
          ""
        )}} from './${toPascalCase(itm.name)}';`
    )
  );
  console.log(
    items.reduce(
      (acc2, itm) =>
        `${acc2}\n\n ${itm.items.reduce(
          (acc, cv) => `${acc}\n ${toPascalCase(cv)},`,
          ""
        )}`
    )
  );

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
          <Routes>
            {routes}
            {/* <Route path="/" element={<TestPage />} /> */}
          </Routes>
        </Container>
      </div>
    </MathJaxContext>
  );
}

export default App;
