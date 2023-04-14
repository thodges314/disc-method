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
  synthCyberPaleBlue,
  synthCyberLightBlue,
  synthSunsetOrange,
} from "interactivity/resources/constants/colors";
import EqnDisplay from "./HandKCircleEqnShiftPanel";

import { FormGroup } from "@mui/material";

import "./HandKCircleGraphShift.css";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const cyberLightBlue = hexToRgba(synthCyberLightBlue);
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

const d_Scale = d3.scaleLinear().domain([0, 13]).range([0, width]);

const numbersRadius = [];
for (let i = 0; i <= 24; i++) {
  numbersRadius.push((i * Math.PI) / 13);
}

const HandKCircleGraphShift = () => {
  const chartRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const marks = useMemo(() => marksArray(-5, 5), []);

  const eqnDisplayRef = useRef(null);
  const movingCircleRef = useRef(null);
  const hLocationRef = useRef(0);
  const kLocationRef = useRef(0);

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
    xAxisGenerator
      .tickValues([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6])
      .tickFormat(d3.format("d"));
    yAxisGenerator
      .tickValues([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
      .tickFormat(d3.format("d"));

    xAxisGridGenerator
      .tickValues([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6])
      .tickFormat("")
      .tickSize(height);

    yAxisGridGenerator
      .tickValues([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
      .tickFormat("")
      .tickSize(-width);

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
      .classed("sunset-yellow-circle", true);
  });

  const shiftGraph = () => {
    movingCircleRef.current
      .transition()
      .duration(750)
      .attr(
        "transform",
        `translate(${x_scale(hLocationRef.current) - width / 2},${
          y_scale(kLocationRef.current) - height / 2
        })`
      );
  };

  const updateHValue = (h) => {
    hLocationRef.current = h;
    shiftGraph();
    eqnDisplayRef.current.setEqnH(h + 5);
  };

  const updateKValue = (k) => {
    kLocationRef.current = k;
    shiftGraph();
    eqnDisplayRef.current.setEqnK(k + 5);
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
              <div>h</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateHValue(newValue)}
                  min={-5}
                  max={5}
                  step={1}
                  defaultValue={0}
                  size="small"
                  marks={marks}
                />
              </div>
            </ControlsRow>
            <ControlsRow>
              <div>k</div>
              <div>
                <CustomSlider
                  onChange={(_evt, newValue) => updateKValue(newValue)}
                  min={-5}
                  max={5}
                  step={1}
                  defaultValue={0}
                  size="small"
                  marks={marks}
                />
              </div>
            </ControlsRow>
          </ControlsCard>
        </div>
      </FormGroup>
    </>
  );
};

export default HandKCircleGraphShift;
