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

import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const row1 = [
  <DisplayEquation>{`$ x $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-4}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-3}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-2}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{-1}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{0}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{1}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{2}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{3}} $`}</DisplayEquation>,
  <DisplayEquation>{`$ {\\color{${sunsetYellow}}{4}} $`}</DisplayEquation>,
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
const offsetValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const offsetSquared = offsetValues.map((value) => value ** 2);

const offsetRow = (change, ref) => {
  const rowArray = offsetValues.map((value, idx) =>
    entry(value, change, ref[idx])
  );
  const offset = offsetValues[4];
  rowArray.unshift(
    <DisplayEquation>
      {offset <= 0
        ? `$ x - {\\color{${sunsetMagenta}}${-offset}} $`
        : `$ x + {\\color{${sunsetMagenta}}${offset}} $`}
    </DisplayEquation>
  );
  return rowArray;
};

const offsetSquaredRow = (change, ref) => {
  const rowArray = offsetSquared.map((value, idx) =>
    entry(value, change, ref[idx], true)
  );
  const offset = offsetValues[4];
  rowArray.unshift(
    <DisplayEquation>
      {offset <= 0
        ? `$ (x - {\\color{${sunsetMagenta}}${-offset}})^2 $`
        : `$ (x + {\\color{${sunsetMagenta}}${offset}})^2 $`}
    </DisplayEquation>
  );
  return rowArray;
};

const ShiftingTable = forwardRef((_props, ref) => {
  const [offset, setOffset] = useState(0);
  const [change, setChange] = useState(0);
  const offsetRowRefs = useMemo(
    () =>
      Array(offsetValues.length)
        .fill()
        .map(() => createRef()),
    [offsetValues.length]
  );
  const offsetSquaredRefs = useMemo(
    () =>
      Array(offsetValues.length)
        .fill()
        .map(() => createRef()),
    [offsetValues.length]
  );

  const animateDecrement = () => {
    // const animateIncrement = () => {
    const newValue = offsetValues[offsetValues.length - 1] + 1;

    offsetValues.push(newValue);
    offsetValues.shift();
    offsetSquared.push(newValue ** 2);
    offsetSquared.shift();
    // do the stuff
    setChange(1);
    setOffset(offset + 1);
  };
  const animateIncrement = () => {
    // const animateDecrement = () => {
    const newValue = offsetValues[0] - 1;
    offsetValues.unshift(newValue);
    offsetValues.pop();
    offsetSquared.unshift(newValue ** 2);
    offsetSquared.pop();
    setChange(-1);
    setOffset(offset - 1);
  };
  useImperativeHandle(ref, () => ({
    offsetUp: () => animateIncrement(),
    offsetDown: () => animateDecrement(),
  }));
  return (
    <div
      style={{
        maxWidth: "860px",
        marginTop: "30px",
        marginBottom: "30px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <CustomTable
        entries={[
          row1,
          offsetRow(change, offsetRowRefs),
          offsetSquaredRow(change, offsetSquaredRefs),
        ]}
      />
    </div>
  );
});

export default ShiftingTable;
