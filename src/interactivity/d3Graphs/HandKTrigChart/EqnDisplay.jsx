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
      setEqn(Math.round((newEqn * 12) / Math.PI));
    },
  }));
  return (
    <EquationCard>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-around",
          height: 60,
          width: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ width: 160 }}>
          <InlineEquation>{`$$ {\\color{${sunsetMagenta}}{y=\\sin{(\\theta)}}} $$`}</InlineEquation>
        </div>
        <div style={{ width: 160 }}>
          <InlineEquation>{equationArray[eqn]}</InlineEquation>
        </div>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
