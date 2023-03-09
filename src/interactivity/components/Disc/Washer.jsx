import { useMemo } from "react";
import { useControls } from "leva";
import { ThickStraightLine } from "interactivity/components/Lines";
import RotationObject, {
  FlatIntegral,
} from "interactivity/components/RotationObject";
import {
  synthSunsetPink,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
import { darkPhongMaterial } from "interactivity/resources/materials";

const Washer = ({
  solid: {
    domain = [0, 1],
    bigFunc = (x) => x,
    littleFunc = (x) => x,
    resolution = 20,
  },
  sides = 90,
  threeDee = true,
  labelProportion = 1,
  functionNameBig = "f(x)",
  functionNameLittle = "g(x)",
  labelColorBig = synthSunsetPink,
  labelColorLittle = synthSunsetViolet,
}) => {
  const step = useMemo(() => 0.5 / resolution);
  const options = useMemo(
    () => ({
      x: {
        value: domain[0],
        min: domain[0],
        max: domain[1],
        step: step,
      },
      label: true,
    }),
    []
  );
  const controls = useControls(options);
  const zTransform = 1 / 2;
  const yTransform = 3 ** (1 / 2) / 2;
  return (
    <>
      {controls.x >= domain[0] &&
        (threeDee ? (
          <>
            <RotationObject
              solid={{
                domain: [domain[0], controls.x],
                func: bigFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
            />
            <RotationObject
              solid={{
                domain: [domain[0], controls.x],
                func: littleFunc,
                resolution: resolution,
              }}
              sides={sides}
              normalMaterial={false}
            />
          </>
        ) : (
          <FlatIntegral
            solid={{
              domain: [domain[0], domain[1]],
              funcTop: bigFunc,
              funcBottom: littleFunc,
              resolution: resolution,
            }}
            rightBound={controls.x}
          />
        ))}

      {threeDee && (
        <>
          <mesh rotation-y={-Math.PI / 2} position-x={domain[0]}>
            {darkPhongMaterial}
            <ringGeometry
              args={[littleFunc(domain[0]), bigFunc(domain[0]), sides]}
            />
          </mesh>
          <mesh rotation-y={-Math.PI / 2} position-x={controls.x}>
            {darkPhongMaterial}
            <ringGeometry
              args={[littleFunc(controls.x), bigFunc(controls.x), sides]}
            />
          </mesh>
          <ThickStraightLine
            start={[controls.x, 0, 0]}
            end={[
              controls.x,
              yTransform * littleFunc(controls.x),
              zTransform * littleFunc(controls.x),
            ]}
            color={synthSunsetViolet}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[controls.x, 0, 0]}
            end={[
              controls.x,
              yTransform * bigFunc(controls.x),
              -zTransform * bigFunc(controls.x),
            ]}
            color={synthSunsetPink}
            label={functionNameBig}
            labelProportion={labelProportion}
          />
        </>
      )}

      {!threeDee && (
        <>
          <ThickStraightLine
            start={[controls.x + 0.01, 0, 0.01]}
            end={[controls.x + 0 + 0.01, littleFunc(controls.x), 0.01]}
            color={labelColorLittle}
            label={functionNameLittle}
            labelProportion={labelProportion}
          />
          <ThickStraightLine
            start={[controls.x - 0.01, 0, 0.01]}
            end={[controls.x - 0.01, bigFunc(controls.x), 0.01]}
            color={labelColorBig}
            label={functionNameBig}
            labelProportion={labelProportion}
            labelRight={false}
          />
        </>
      )}
    </>
  );
};

export default Washer;