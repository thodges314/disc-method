import { forwardRef, useImperativeHandle, useState } from "react";
import EquationCard from "components/interface/EquationCard";
import equationArray from "./equationArray";
import { InlineEquation } from "components/interface/DisplayEquation";

const EqnDisplay = forwardRef((_props, ref) => {
  const [eqn, setEqn] = useState(0);
  useImperativeHandle(ref, () => ({
    setEqn: (newEqn) => {
      setEqn(newEqn);
    },
  }));
  return (
    <EquationCard height={50}>
      <InlineEquation>{equationArray[eqn]}</InlineEquation>
    </EquationCard>
  );
});

export default EqnDisplay;
