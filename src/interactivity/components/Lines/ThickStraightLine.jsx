import { LineCurve3, Vector3, DoubleSide } from "three";
import { CourierPrime } from "interactivity/components/Text";

const ThickStraightLine = ({
  start = [0, 0, 0],
  end = [0, 0, 0],
  width = 0.02,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  label = "",
  bold = true,
  labelRight = true,
  labelProportion = 1,
  color,
  shift = null,
}) => {
  const points = [
    new Vector3(start[0], start[1], start[2]),
    new Vector3(end[0], end[1], end[2]),
  ];
  const curve = new LineCurve3(...points);
  const labelPos = [
    (start[0] + end[0]) / 2 + (labelRight ? 0.1 : -0.95) * labelProportion,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];
  return (
    <>
      <mesh
        rotation-x={rotationX}
        rotation-y={rotationY}
        rotation-z={rotationZ}
        position={shift}
      >
        <tubeGeometry attach="geometry" args={[curve, 1, width, 16, false]} />
        {color ? (
          <meshPhongMaterial
            color={color}
            attach="material"
            side={DoubleSide}
          />
        ) : (
          <meshNormalMaterial attach="material" side={DoubleSide} />
        )}
      </mesh>
      {label !== "" && (
        <CourierPrime
          position={labelPos}
          text={label}
          color={color}
          size={0.25 * labelProportion}
          bold={bold}
        />
      )}
    </>
  );
};

export default ThickStraightLine;
