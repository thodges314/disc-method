import { forwardRef, useImperativeHandle, useState } from "react";
import EquationCard from "components/interface/EquationCard";
import equationArray from "./equationArray";
import { InlineEquation } from "components/interface/DisplayEquation";
import { hexToRgba } from "utils/utils";
import { synthSunsetMagenta } from "interactivity/resources/constants/colors";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);

const EqnDisplay = forwardRef((_props, ref) => {
  const [eqn, setEqn] = useState(0);
  useImperativeHandle(ref, () => ({
    setEqn: (newEqn) => {
      setEqn(newEqn);
    },
  }));
  return (
    <EquationCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <InlineEquation>{`$ {\\color{${sunsetMagenta}}{y=\\cos(x)}} $`}</InlineEquation>
        <InlineEquation>{equationArray[eqn]}</InlineEquation>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
