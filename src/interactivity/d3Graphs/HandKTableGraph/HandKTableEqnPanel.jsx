import { forwardRef, useImperativeHandle, useState } from "react";
import EquationCard from "components/interface/EquationCard";
import equationArray from "./hAndKEqnArray";
import DisplayEquation from "components/interface/DisplayEquation";

const EqnDisplay = forwardRef((_props, ref) => {
  const [eqn, setEqn] = useState(5);
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
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: "100%",
        }}
      >
        <DisplayEquation>{equationArray[eqn]}</DisplayEquation>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
