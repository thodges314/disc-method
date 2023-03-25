import DisplayEquation from "components/interface/DisplayEquation";
import equationArray from "./equationArray";

import CanvasCard from "components/interface/CanvasCard";
import ControlsCard from "components/interface/ControlsCard";
import CustomCheckbox from "components/interface/CustomCheckbox";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup, FormControlLabel } from "@mui/material";
import { interpolatePath } from "d3-interpolate-path";

import * as d3 from "d3";
import { useRef, useEffect, useState, Fragment } from "react";
import allValuesArray from "./maclaurenValues";
import cosValuesArray from "./cosineValues";
import { hexToRgba } from "utils/utils";
import {
  synthCyberPaleBlue,
  themeBackground,
  synthSunsetMagenta,
  synthSunsetYellow,
  synthSunsetViolet,
} from "interactivity/resources/constants/colors";
// import MaclaurinGraph from "./MaclaurenGraph";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const sunsetViolet = hexToRgba(synthSunsetViolet, 1);

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 3 * Math.PI;
const y_distance = x_distance / goldenRatio;

const x_scale = d3
  .scaleLinear()
  .domain([-2 * Math.PI, 4 * Math.PI])
  .range([0, width]);

const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

let dd = 0;

const MaclaurinGraph = ({ n }) => {
  const chartRef = useRef(null);
  const fieldRef = useRef(null);
  // const nValue = useRef(0);
  const line = d3
    .line()
    .x((d) => x_scale(d[0]))
    .y((d) => y_scale(d[1]));
  const allValues = allValuesArray();
  let movingGraph;
  let formulaField;

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    // const allValues = allValuesArray();
    const cosValues = cosValuesArray();

    //axis
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    xAxisGenerator
      .tickValues([
        -2 * Math.PI,
        -1 * Math.PI,
        0,
        1 * Math.PI,
        2 * Math.PI,
        3 * Math.PI,
        4 * Math.PI,
      ])
      .tickFormat((_d, i) => ["-2π", "-1π", "", "1π", "2π", "3π", "4π"][i]);
    yAxisGenerator.tickValues([-2, -1, 1, 2]);
    const xAxis = svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height / 2})`)
      .call(xAxisGenerator);
    const yAxis = svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    xAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    xAxis.selectAll("text").attr("fill", hexToRgba(synthCyberPaleBlue));
    xAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis.selectAll("text").attr("fill", hexToRgba(synthCyberPaleBlue));
    yAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));

    svg
      .append("path")
      .datum(cosValues)
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    movingGraph = svg
      .selectAll("path")
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5)
      .attr("fill-opacity", 0)
      .attr("fill", "none");
    // .attr("d", line(allValues[0]));
    // movingGraph.enter().append("path").attr("d", line(allValues[n]));
    // movingGraph.transition().duration(300).attr("d", line(allValues[n]));
    // movingGraph.exit().remove();
    // console.log("boink");

    formulaField = svg.append("div");
  }, []);

  useEffect(() => {
    movingGraph.enter().append("path").attr("d", line(allValues[n]));
    movingGraph.transition().duration(300).attr("d", line(allValues[n]));
    movingGraph.exit().remove();
    console.log("boinkboink");
  }, [n]);

  // const switchGraphs = (n) => {
  //   movingGraph.transition().duration(300).attr("d", line(allValues[n]));
  //   // for (let i = 0; i <= 6; i++) {
  //   //   // if (i === n) {
  //   //   //   d3.select(`#display-equation-${n}`).style("visibility", "visible");
  //   //   // } else {
  //   //   d3.select(`#display-equation-${n}`).style("visibility", "hidden");
  //   //   // }
  //   // }
  //   // d3.select(`#display-equation-${n}`).style("visibility", "visible");
  //   dd = n;
  //   console.log(n);
  //   // console.log(chartRef.current);
  //   console.log(fieldRef);
  // };

  // useEffect(() => console.log(dd), [dd]);

  // useEffect(() => {
  //   console.log(nValue);
  // }, [nValue]);

  return (
    // <div
    //   style={{
    //     width: width,
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     marginBottom: "10px",
    //   }}
    // >
    <CanvasCard height={height} width={width}>
      <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
    </CanvasCard>
  );
};

export default MaclaurinGraph;
