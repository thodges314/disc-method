import { forwardRef } from "react";
import EquationCard from "components/interface/EquationCard";
import DisplayEquation from "components/interface/DisplayEquation";

const EqnDisplay = forwardRef((_props, ref) => {
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
        <DisplayEquation>{`$$y=4$$`}</DisplayEquation>
      </div>
    </EquationCard>
  );
});

export default EqnDisplay;
