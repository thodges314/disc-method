import { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CanvasCard from "components/interface/CanvasCard";
import { hexToRgba } from "utils/utils";
import { marksArray } from "../utilities";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetOrange,
} from "interactivity/resources/constants/colors";
import EqnDisplay from "./HandKCircleEqnPanel";

import { FormGroup } from "@mui/material";

import "./HandKCircleGraph.css";

const STARTING_ANGLE = Math.PI / 6;
const STARTING_RADIUS = 2;

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetOrange = hexToRgba(synthSunsetOrange, 1);

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 13;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-6.5, 6.5]).range([0, width]);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

const x_ticks = x_scale
  .ticks()
  .filter(Number.isInteger)
  .filter((d) => !!d);
const y_ticks = y_scale
  .ticks()
  .filter(Number.isInteger)
  .filter((d) => !!d);

const d_Scale = d3.scaleLinear().domain([0, 13]).range([0, width]);

const numbersRadius = [];
for (let i = 0; i <= 24; i++) {
  numbersRadius.push((i * Math.PI) / 13);
}

const HandKCircleGraph = () => {
  const chartRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const radiusMarks = useMemo(() => marksArray(1, 4), []);
  const eqnDisplayRef = useRef(null);
  const movingCircleRef = useRef(null);
  const cosLineRef = useRef(null);
  const sinLineRef = useRef(null);
  const radiusRef = useRef(2);
  const angleRef = useRef(STARTING_ANGLE);
  const lastAngleRef = useRef(STARTING_ANGLE);
  const radialLineRef = useRef();
  const lastRadiusRef = useRef(STARTING_RADIUS);
  const cosLineLabelRef = useRef(null);
  const sinLineLabelRef = useRef(null);
  const radiusLineLabelRef = useRef(null);

  const positionCosineText = (angleRads) => {
    const middle_x = radiusRef.current * Math.cos(angleRads);
    const yValue =
      angleRads >= Math.PI && angleRads < 2 * Math.PI
        ? y_scale(0) - 6
        : y_scale(0) + 18;
    return [x_scale(middle_x / 2) - 4, yValue];
  };

  const positionSineText = (angleRads) => {
    const middle_x = radiusRef.current * Math.cos(angleRads);
    const middle_y = radiusRef.current * Math.sin(angleRads);
    const xValue =
      angleRads >= Math.PI / 2 && angleRads < Math.PI
        ? x_scale(middle_x) - 14
        : x_scale(middle_x) + 4;
    return [xValue, y_scale(middle_y / 2) + 6];
  };

  const positionRadiusText = (angleRads) => {
    const middle_x = radiusRef.current * Math.cos(angleRads);
    const middle_y = radiusRef.current * Math.sin(angleRads);
    const yValue =
      angleRads >= Math.PI && angleRads < 2 * Math.PI
        ? y_scale(middle_y / 2) + 18
        : y_scale(middle_y / 2) - 6;
    const xValue =
      (angleRads >= Math.PI / 4 && angleRads < Math.PI / 2) ||
      (angleRads >= (Math.Pi * 3) / 4 && angleRads <= (Math.PI * 7) / 4)
        ? x_scale(middle_x / 2) - 14
        : (angleRads >= Math.PI / 2 && angleRads <= (Math.PI * 3) / 4) ||
          (angleRads >= (Math.Pi * 5) / 4 && angleRads < (Math.PI * 3) / 4)
        ? x_scale(middle_x / 2) + 4
        : x_scale(middle_x / 2) - 4;
    return [xValue, yValue];
  };

  const formatValue = (value) => {
    const nominalValue = Math.round(value * 10000) / 10000;
    if (nominalValue % 1 === 0) {
      return d3.format(".0f")(nominalValue);
    }
    if (nominalValue % 0.5 === 0) {
      return d3.format(".1f")(nominalValue);
    }
    return d3.format(".4f")(nominalValue);
  };

  useEffect(() => {
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    const xAxisGridGenerator = d3.axisBottom(x_scale);
    const yAxisGridGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]));
    xAxisGenerator.tickValues(x_ticks).tickFormat(d3.format("d"));
    yAxisGenerator.tickValues(y_ticks).tickFormat(d3.format("d"));

    xAxisGridGenerator.tickValues(x_ticks).tickFormat("").tickSize(height);

    yAxisGridGenerator.tickValues(y_ticks).tickFormat("").tickSize(-width);

    svgRef.current = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    svgRef.current
      .append("g")
      .classed("grid-lines", true)
      .call(yAxisGridGenerator);

    svgRef.current
      .append("g")
      .classed("grid-lines", true)
      .call(xAxisGridGenerator);

    svgRef.current
      .append("g")
      .classed("axis", true)
      .attr("transform", `translate(0,${height / 2})`)
      .call(xAxisGenerator);

    svgRef.current
      .append("g")
      .classed("axis", true)
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    movingCircleRef.current = svgRef.current
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", d_Scale(2))
      .classed("cyber-light-blue-circle", true);

    cosLineRef.current = svgRef.current
      .append("path")
      .datum([
        [0, 0],
        [radiusRef.current * Math.cos(lastAngleRef.current), 0],
      ])
      .classed("thick-line", true)
      .attr("stroke", sunsetMagenta)
      .attr("d", lineRef.current);

    sinLineRef.current = svgRef.current
      .append("path")
      .datum([
        [radiusRef.current * Math.cos(lastAngleRef.current), 0],
        [
          radiusRef.current * Math.cos(lastAngleRef.current),
          radiusRef.current * Math.sin(lastAngleRef.current),
        ],
      ])
      .classed("thick-line", true)
      .attr("stroke", sunsetYellow)
      .attr("d", lineRef.current);

    radialLineRef.current = svgRef.current
      .append("path")
      .datum([
        [0, 0],
        [2, 0],
      ])
      .classed("thick-line", true)
      .attr("stroke", sunsetOrange)
      .attr("d", lineRef.current);

    cosLineLabelRef.current = svgRef.current
      .append("text")
      .classed("label", true)
      .text(`${formatValue(2 * Math.cos(lastAngleRef.current))}`)
      .attr("x", positionCosineText(lastAngleRef.current)[0])
      .attr("y", positionCosineText(lastAngleRef.current)[1])
      .attr("fill", sunsetMagenta);

    sinLineLabelRef.current = svgRef.current
      .append("text")
      .classed("label", true)
      .text(`${formatValue(2 * Math.sin(lastAngleRef.current))}`)
      .attr("x", positionSineText(lastAngleRef.current)[0])
      .attr("y", positionSineText(lastAngleRef.current)[1])
      .attr("fill", sunsetYellow);

    radiusLineLabelRef.current = svgRef.current
      .append("text")
      .classed("label", true)
      .text(`${radiusRef.current}`)
      .attr("x", positionRadiusText(lastAngleRef.current)[0])
      .attr("y", positionRadiusText(lastAngleRef.current)[1])
      .attr("fill", sunsetOrange);

    const bbBoxRadialLine = radialLineRef.current.node().getBBox();

    const { x: x_middle, y: y_middle } = bbBoxRadialLine;

    const interpolateRotate = d3.interpolateString(
      `rotate(${0},${x_middle},${y_middle})`,
      `rotate(${-30},${x_middle},${y_middle})`
    );
    radialLineRef.current
      .transition()
      .duration(0)
      .attrTween("transform", () => interpolateRotate);
  });

  const shiftGraph = () => {
    const angleDegrees = (angleRef.current * 180) / Math.PI;
    if (angleDegrees !== lastAngleRef.current) {
      const bbBoxRadialLine = radialLineRef.current.node().getBBox();

      const { x: x_middle, y: y_middle } = bbBoxRadialLine;

      const interpolateRotate = d3.interpolateString(
        `rotate(${lastAngleRef.current},${x_middle},${y_middle})`,
        `rotate(${-angleDegrees},${x_middle},${y_middle})`
      );

      radialLineRef.current
        .transition()
        .duration(0)
        .attrTween("transform", () => interpolateRotate);

      lastAngleRef.current = (angleRef.current * 180) / Math.PI;

      cosLineRef.current
        .transition()
        .duration(0)
        .attr(
          "d",
          lineRef.current([
            [0, 0],
            [radiusRef.current * Math.cos(angleRef.current), 0],
          ])
        );

      sinLineRef.current
        .transition()
        .duration(0)
        .attr(
          "d",
          lineRef.current([
            [radiusRef.current * Math.cos(angleRef.current), 0],
            [
              radiusRef.current * Math.cos(angleRef.current),
              radiusRef.current * Math.sin(angleRef.current),
            ],
          ])
        );

      const cosinePosition = positionCosineText(angleRef.current);
      const sinePosition = positionSineText(angleRef.current);
      const radiusPosition = positionRadiusText(angleRef.current);
      const cosinePositionText = formatValue(
        radiusRef.current * Math.cos(angleRef.current)
      );
      const sinePositionText = formatValue(
        radiusRef.current * Math.sin(angleRef.current)
      );
      const radiusPositionText = formatValue(radiusRef.current);

      cosLineLabelRef.current
        .transition()
        .duration(0)
        .attr("x", cosinePosition[0])
        .attr("y", cosinePosition[1])
        .text(cosinePositionText);

      sinLineLabelRef.current
        .transition()
        .duration(0)
        .attr("x", sinePosition[0])
        .attr("y", sinePosition[1])
        .text(sinePositionText);

      radiusLineLabelRef.current
        .transition()
        .duration(0)
        .attr("x", radiusPosition[0])
        .attr("y", radiusPosition[1])
        .text(radiusPositionText);
    }

    if (radiusRef.current !== lastRadiusRef.current) {
      radialLineRef.current
        .transition()
        .duration(350)
        .attr(
          "d",
          lineRef.current([
            [0, 0],
            [radiusRef.current, 0],
          ])
        );

      movingCircleRef.current
        .transition()
        .duration(350)
        .attr("r", d_Scale(radiusRef.current));

      lastRadiusRef.current = radiusRef.current;

      cosLineRef.current
        .transition()
        .duration(350)
        .attr(
          "d",
          lineRef.current([
            [0, 0],
            [radiusRef.current * Math.cos(angleRef.current), 0],
          ])
        );

      sinLineRef.current
        .transition()
        .duration(350)
        .attr(
          "d",
          lineRef.current([
            [radiusRef.current * Math.cos(angleRef.current), 0],
            [
              radiusRef.current * Math.cos(angleRef.current),
              radiusRef.current * Math.sin(angleRef.current),
            ],
          ])
        );

      const cosinePosition = positionCosineText(angleRef.current);
      const sinePosition = positionSineText(angleRef.current);
      const radiusPosition = positionRadiusText(angleRef.current);
      const cosinePositionText = formatValue(
        radiusRef.current * Math.cos(angleRef.current)
      );
      const sinePositionText = formatValue(
        radiusRef.current * Math.sin(angleRef.current)
      );
      const radiusPositionText = formatValue(radiusRef.current);

      cosLineLabelRef.current
        .transition()
        .duration(350)
        .attr("x", cosinePosition[0])
        .attr("y", cosinePosition[1])
        .text(cosinePositionText);

      sinLineLabelRef.current
        .transition()
        .duration(350)
        .attr("x", sinePosition[0])
        .attr("y", sinePosition[1])
        .text(sinePositionText);

      radiusLineLabelRef.current
        .transition()
        .duration(350)
        .attr("x", radiusPosition[0])
        .attr("y", radiusPosition[1])
        .text(radiusPositionText);
    }
  };

  const updateThetaValue = (theta) => {
    angleRef.current = theta;
    shiftGraph();
  };

  const updateRValue = (r) => {
    radiusRef.current = r;
    shiftGraph();
    eqnDisplayRef.current.setEqnR(r);
  };

  return (
    <>
      <div
        style={{
          width: width,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "10px",
        }}
      >
        <EqnDisplay ref={eqnDisplayRef} />
        <CanvasCard height={height} width={width}>
          <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
        </CanvasCard>
      </div>
      <FormGroup>
        <div
          style={{
            width: "860px",
            marginBottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ControlsCard>
            <ControlsRow>
              <div>θ</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateThetaValue(newValue)}
                  min={0}
                  max={2 * Math.PI}
                  step={Math.PI / 24}
                  defaultValue={STARTING_ANGLE}
                  size="small"
                />
              </div>
            </ControlsRow>
            <ControlsRow>
              <div>r</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateRValue(newValue)}
                  min={1}
                  max={4}
                  step={1}
                  defaultValue={STARTING_RADIUS}
                  size="small"
                  marks={radiusMarks}
                />
              </div>
            </ControlsRow>
          </ControlsCard>
        </div>
      </FormGroup>
    </>
  );
};

export default HandKCircleGraph;
