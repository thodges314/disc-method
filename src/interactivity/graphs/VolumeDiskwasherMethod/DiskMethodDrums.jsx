import { useEffect, useMemo, useRef, useState } from "react";
import Card from "@mui/material/Card";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment } from "@react-three/drei";
import Slider from "@mui/material/Slider";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import ControlsCard from "components/interface/ControlsCard";

import {
  Axes,
  Drum,
  RotationObject,
  RotationObjectLine,
} from "interactivity/components";

const height = 400;
const width = height * 1.61803398875;

const twoDView = [2, 1.5, 0];
const cameraPosition = [1.25, 0, 5];
const axesLength = 5;
const labelProportion = 1;

const discMethod1 = {
  domain: [1, 4],
  func: (x) => x ** 3 - 7 * x ** 2 + 14 * x - 5,
  intFunc: (x) => (1 / 4) * x ** 4 - (1 / 7) * x ** 3 + 7 * x ** 2 - 5 * x,
  resolution: 5,
};

// const threeDee = false;

const DiskMethodDrums = () => {
  const { domain, resolution } = discMethod1;
  const step = useMemo(() => 1 / resolution);
  const cameraRef = useRef();
  const [threeDee, setThreeDee] = useState(false);
  const [value, setValue] = useState(domain[0]);
  useEffect(() => {
    window.setTimeout(
      () => cameraRef.current?.setTarget(...twoDView, true),
      500
    );
  }, []);

  return (
    <div style={{ width: width, marginLeft: "auto", marginRight: "auto" }}>
      <Card
        sx={{
          height: height,
          width: width,
          mt: "20px",
          mb: 0,
        }}
      >
        <Canvas camera={{ position: cameraPosition }}>
          <ambientLight color={0x91b2cb} intensity={2} />
          <directionalLight position={[1123, 56, 79]} intensity={0.5} />
          <Environment
            files={
              process.env.PUBLIC_URL +
              "/img/industrial_sunset_02_puresky_1k.hdr"
            }
            background
          />
          {threeDee && (
            <RotationObject solid={discMethod1} threeDee={threeDee} />
          )}
          <RotationObjectLine solid={discMethod1} />
          <Drum
            solid={discMethod1}
            threeDee={threeDee}
            labelProportion={labelProportion}
            functionName={"R(x)"}
            value={value}
          />
          <CameraControls ref={cameraRef} />
          <Axes length={axesLength} labelProportion={labelProportion} />
        </Canvas>
      </Card>
      <FormGroup>
        <ControlsCard>
          <FormControlLabel
            control={
              <Checkbox
                checked={threeDee}
                onChange={(evt) => setThreeDee(evt.target.checked)}
              />
            }
            label="Rotate Graph"
          />

          <Slider
            onChange={(_evt, newValue) => setValue(newValue)}
            value={value}
            min={domain[0]}
            max={domain[1] - step}
            step={step}
            size="small"
            valueLabelDisplay="auto"
          />
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default DiskMethodDrums;
