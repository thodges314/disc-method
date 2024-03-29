import { useMemo } from "react";
import { Vector2 } from "three";
import { ThickCurveyLine } from "interactivity/components/Lines";

const RotationObjectLine = ({
  solid: { domain = [0.1, 1], func = (x) => x, resolution = 10 },
  shift = null,
}) => {
  const points = useMemo(() => {
    const pts = [];
    const dx = 0.5 / resolution;
    for (let i = domain[0]; i < domain[1]; i += dx) {
      pts.push(new Vector2(func(i), i));
    }
    pts.push(new Vector2(func(domain[1]), domain[1]));
    return pts;
  }, [domain, func, resolution]);

  return (
    <ThickCurveyLine
      points={points}
      rotationX={Math.PI}
      rotationZ={-Math.PI / 2}
      shift={shift}
    />
  );
};

export default RotationObjectLine;
