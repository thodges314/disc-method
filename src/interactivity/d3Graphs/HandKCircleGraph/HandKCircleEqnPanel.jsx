import { forwardRef, useImperativeHandle, useState, useMemo } from "react";
import EquationCard from "components/interface/EquationCard";
import equationArray from "./hAndKCircleEqnArray";
import DisplayEquation from "components/interface/DisplayEquation";

const EqnDisplay = forwardRef((_props, ref) => {
  const eqnArray = useMemo(() => equationArray, []);
  const [eqnR, setEqnR] = useState(2);
  useImperativeHandle(ref, () => ({
    setEqnR: (newEqn) => setEqnR(newEqn),
  }));
  return (
    <EquationCard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: "100%",
        }}
      >
        <DisplayEquation>{eqnArray[eqnR]}</DisplayEquation>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
