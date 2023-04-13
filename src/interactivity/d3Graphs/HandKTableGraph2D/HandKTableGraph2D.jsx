import { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CanvasCard from "components/interface/CanvasCard";
import { hexToRgba } from "utils/utils";
import { marksArray } from "../utilities";
import {
  synthSunsetYellow,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";
import parabolaValuesArray from "./parabolaValuesArray";
import EqnDisplay from "./HandKTableEqnPanel2D";

import { FormGroup } from "@mui/material";

import "./HandKTableGraph2D.css";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 11;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-5.5, 5.5]).range([0, width]);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 5, (y_distance * 4) / 5])
  .range([height, 0]);

const numbersXMinusH = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const indexToNumbersScale = d3.scaleLinear().domain([0, 20]).range([-10, 10]);

const HandKTableGraph = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const marks = useMemo(() => marksArray(-5, 5), []);
  const numbersXMinusHRef = useRef(null);
  const numbersXMinusHSqrRef = useRef(null);
  const placeForNumbersXMinusHRef = useRef(null);
  const placeForNumbersXMinusHSqrRef = useRef(null);
  const eqnDisplayRef = useRef(null);
  const hLocationRef = useRef(0);
  const kLocationRef = useRef(0);

  useEffect(() => {
    const parabolaValues = parabolaValuesArray();
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]));
    xAxisGenerator
      .tickValues([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
      .tickFormat(d3.format("d"));
    yAxisGenerator.tickValues([-1, 1, 2, 3, 4, 5]).tickFormat(d3.format("d"));

    svgRef.current = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    const xAxis = svgRef.current
      .append("g")
      .classed("x-axis", true)
      .attr("transform", `translate(0,${(height * 4) / 5})`)
      .call(xAxisGenerator);

    xAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    xAxis
      .selectAll("text")
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1)
      .attr("font-size", "1.5em");
    xAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));

    const yAxis = svgRef.current
      .append("g")
      .classed("y-axis", true)
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    yAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis
      .selectAll("text")
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1)
      .attr("font-size", "1.5em");
    yAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(parabolaValues)
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 1.5)
      .attr("d", lineRef.current)
      .attr("fill-opacity", 0)
      .attr("fill", "none");

    numbersXMinusHRef.current = d3
      .select(placeForNumbersXMinusHRef.current)
      .selectAll("div")
      .data(numbersXMinusH)
      .enter()
      .append("div")
      .text((d) => d)
      .classed("numbers-x-minus-h", true)
      .each((_d, i, nodes) =>
        d3
          .select(nodes[i])
          .style("left", `${50 * (indexToNumbersScale(i) + 5)}px`)
      );

    numbersXMinusHSqrRef.current = d3
      .select(placeForNumbersXMinusHSqrRef.current)
      .selectAll("div")
      .data(numbersXMinusH)
      .enter()
      .append("div")
      .text((d) => d ** 2)
      .classed("numbers-x-minus-h-squared", true)
      .each((_d, i, nodes) =>
        d3
          .select(nodes[i])
          .style("left", `${50 * (indexToNumbersScale(i) + 5)}px`)
      );
  });

  const shiftGraph = () => {
    movingGraphRef.current
      .transition()
      .duration(750)
      .attr(
        "transform",
        `translate(${x_scale(hLocationRef.current) - width / 2},${
          y_scale(kLocationRef.current) - (height * 4) / 5
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

export default HandKTableGraph;
