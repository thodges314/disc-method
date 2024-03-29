import CanvasCard from "components/interface/CanvasCard";
import EquationCard from "components/interface/EquationCard";
import DisplayEquation from "components/interface/DisplayEquation";

import * as d3 from "d3";
import { useRef, useEffect } from "react";

import lnValuesArray from "./lnValuesArray";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
} from "interactivity/resources/constants/colors";

import "./TaylorChart.css";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const displayEquations = [
  <DisplayEquation>{`$$ {\\color{${sunsetMagenta}}{y=\\ln(x)}} $$`}</DisplayEquation>,
  <DisplayEquation>{`$$ {\\color{${sunsetYellow}}{y=\\ln(2)+\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}(x-2)^n}{2^n n}}}$$`}</DisplayEquation>,
];

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 3 * Math.PI;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-0.5, 5.25]).range([0, width]);

const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

const TaylorChart = () => {
  const chartRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const [lnValues, allValuesTruncated] = lnValuesArray();
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    const xAxisGridGenerator = d3.axisBottom(x_scale);
    const yAxisGridGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]))
      .curve(d3.curveCatmullRom);
    xAxisGenerator.tickValues([1, 2, 3, 4, 5]).tickFormat(d3.format("d"));
    yAxisGenerator.tickValues([-2, -1, 1, 2]).tickFormat(d3.format("d"));
    xAxisGridGenerator
      .tickValues([1, 2, 3, 4, 5])
      .tickFormat("")
      .tickSize(height);

    yAxisGridGenerator
      .tickValues([-2, -1, 1, 2])
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
      .attr("class", "axis")
      .attr("transform", `translate(0,${height / 2})`)
      .call(xAxisGenerator);

    svgRef.current
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    svgRef.current
      .append("path")
      .datum(lnValues)
      .classed("thick-sunset-magenta-path", true)
      .attr("d", lineRef.current);

    svgRef.current
      .append("path")
      .datum(allValuesTruncated)
      .classed("medium-thick-sunset-yellow-path", true)
      .attr("d", lineRef.current);
  }, []);

  return (
    <div
      style={{
        width: width,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
      }}
    >
      <EquationCard height={50}>{displayEquations}</EquationCard>
      <CanvasCard height={height} width={width}>
        <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
      </CanvasCard>
    </div>
  );
};

export default TaylorChart;
