import { forwardRef, useImperativeHandle, useState, useMemo } from "react";
import EquationCard from "components/interface/EquationCard";
import equationArray from "./hAndKEqnArray2D";
import DisplayEquation from "components/interface/DisplayEquation";

const EqnDisplay = forwardRef((_props, ref) => {
  const eqnArray = useMemo(() => equationArray, []);
  const [eqnH, setEqnH] = useState(5);
  const [eqnK, setEqnK] = useState(5);
  useImperativeHandle(ref, () => ({
    setEqnH: (newEqn) => setEqnH(newEqn),
    setEqnK: (newEqn) => setEqnK(newEqn),
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
        <DisplayEquation>{eqnArray[eqnH][eqnK]}</DisplayEquation>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
