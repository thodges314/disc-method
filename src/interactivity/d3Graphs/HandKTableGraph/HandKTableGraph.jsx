import { useRef } from "react";
import ShiftingTable from "./ShiftingTable";
import ControlsCard from "components/interface/ControlsCard";

import { Button, FormGroup } from "@mui/material";

const HandKTableGraph = () => {
  const tableRef = useRef(null);
  return (
    <>
      <ShiftingTable ref={tableRef} />
      <FormGroup>
        <ControlsCard>
          <Button onClick={() => tableRef.current.offsetDown()}>-1</Button>
          <Button onClick={() => tableRef.current.offsetUp()}>+1</Button>
        </ControlsCard>
      </FormGroup>
    </>
  );
};

export default HandKTableGraph;
