import {
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  createRef,
} from "react";
import CustomTable from "components/interface/CustomTable";
import DisplayEquation from "components/interface/DisplayEquation";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import ShiftingUnit from "./ShiftingUnit";

import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const displayValue = (colorValue, value) => (
  <DisplayEquation
    style={{ margin: "auto", width: 10 }}
  >{`$ {\\color{${colorValue}}{${value}}} $`}</DisplayEquation>
);

const dummyFcn = (n) => n;
const squareFcn = (n) => n * n;

const offsetDisplayEqn = (
  <DisplayEquation>{`$ (x - {\\color{${sunsetMagenta}}h}) $`}</DisplayEquation>
);

const offsetDisplayEqn2 = (
  <DisplayEquation>
    {`$ (x - {\\color{${sunsetMagenta}}h})^2 $`}
  </DisplayEquation>
);

const row1 = [
  <DisplayEquation
    style={{ margin: "auto", width: 30 }}
  >{`$ x $`}</DisplayEquation>,
  displayValue(sunsetYellow, -5),
  displayValue(sunsetYellow, -4),
  displayValue(sunsetYellow, -3),
  displayValue(sunsetYellow, -2),
  displayValue(sunsetYellow, -1),
  displayValue(sunsetYellow, 0),
  displayValue(sunsetYellow, 1),
  displayValue(sunsetYellow, 2),
  displayValue(sunsetYellow, 3),
  displayValue(sunsetYellow, 4),
  displayValue(sunsetYellow, 5),
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-5}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-4}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-3}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-2}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-1}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{0}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{1}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{2}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{3}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{4}} $`}</DisplayEquation>,
  // <DisplayEquation>{`$ {\\color{${sunsetYellow}}{5}} $`}</DisplayEquation>,
];

const entry = (value, change, ref, highlight = false) => (
  <Box ref={ref} sx={{ height: 1, width: 30 }}>
    <Slide
      direction={change > 0 ? "left" : "right"}
      in={true}
      key={value}
      timeout={750}
      container={ref.current}
      mountOnEnter
      unmountOnExit
    >
      <div>
        {highlight ? (
          <DisplayEquation>{`$ {\\color{${sunsetYellow}}{${value}}} $`}</DisplayEquation>
        ) : (
          <DisplayEquation>{`$ ${value} $`}</DisplayEquation>
        )}
      </div>
    </Slide>
  </Box>
);

const domainArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const offsetValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const offsetSquared = offsetValues.map((value) => value ** 2);

// const offsetRow = (change, ref) => {
//   const rowArray = offsetValues.map((value, idx) =>
//     // entry(value, change, ref[idx])
//   );
//   // const offset = offsetValues[4];
//   rowArray.unshift(
//     <DisplayEquation>
//       {offset <= 0
//         ? `$ x - {\\color{${sunsetMagenta}}${-offset}} $`
//         : `$ x + {\\color{${sunsetMagenta}}${offset}} $`}
//     </DisplayEquation>
//   );
//   return rowArray;
// };

const offsetRow = (ref, fcn, displayEqn) => {
  const row = domainArray.map((value, idx) => (
    <ShiftingUnit
      initialValue={value}
      colorValue={sunsetYellow}
      key={idx}
      fcn={fcn}
      ref={ref[idx]}
    />
  ));
  row.unshift(
    displayEqn
    // <DisplayEquation>
    //   {`$ (x - {\\color{${sunsetMagenta}}h}) $`}
    // </DisplayEquation>
  );
  return row;
};

const ShiftingTable = forwardRef((_props, ref) => {
  const [offset, setOffset] = useState(0);
  const [change, setChange] = useState(0);
  const offsetRowRefs = useMemo(
    () =>
      Array(domainArray.length)
        .fill()
        .map(() => createRef()),
    [domainArray.length]
  );
  const offsetSquaredRefs = useMemo(
    () =>
      Array(domainArray.length)
        .fill()
        .map(() => createRef()),
    [domainArray.length]
  );

  const row2 = useMemo(
    () => offsetRow(offsetRowRefs, dummyFcn, offsetDisplayEqn),
    [offsetRowRefs.length]
  );
  const row3 = useMemo(
    () => offsetRow(offsetSquaredRefs, squareFcn, offsetDisplayEqn2),
    [offsetRowRefs.length]
  );

  useImperativeHandle(ref, () => ({
    updateH: (value) => {
      offsetRowRefs.forEach((currentRef, idx) =>
        currentRef.current.setNewValue(value)
      );
      offsetSquaredRefs.forEach((currentRef, idx) =>
        currentRef.current.setNewValue(value)
      );
    },
  }));
  return (
    <div
      style={{
        maxWidth: "860px",
        marginTop: "30px",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <CustomTable
        entries={[
          row1,
          row2,
          row3,
          // offsetRow(change, offsetRowRefs),
          // offsetSquaredRow(change, offsetSquaredRefs),
        ]}
      />
    </div>
  );
});

export default ShiftingTable;
