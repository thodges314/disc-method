import CanvasCard from "components/interface/CanvasCard";
import ControlsCard from "components/interface/ControlsCard";
import CustomCheckbox from "components/interface/CustomCheckbox";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup, FormControlLabel } from "@mui/material";
import { interpolatePath } from "d3-interpolate-path";

import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
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

const line = d3
  .line()
  .x((d) => x_scale(d[0]))
  .y((d) => y_scale(d[1]));
const allValues = allValuesArray();
const cosValues = cosValuesArray();

const MaclaurinGraph = (n) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width);

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
      .tickFormat((d, i) => ["-2π", "-1π", "", "1π", "2π", "3π", "4π"][i]);
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
      .attr("fill", "none");
    // .style("fill", "none")
    // .style("fill-opacity", 0);
    // .classed("cosline", true);

    const movingGraph = svg
      // .append("g")
      .append("path")
      .datum(allValues[n])
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5)
      .attr("fill-opacity", 0)
      .attr("fill", "none");

    movingGraph.enter().attr("d", line);
    movingGraph.transition().duration(300).attr("d", line);
    movingGraph.exit().remove();
  }, [n, chartRef.current]);
  // movingGraph.transition().duration(0).attr("d", line(allValues[0]));
  // dummyGraph = svg
  //   .append("path")
  //   .attr("d", line(allValues[0]))
  //   .attr("stroke", sunsetMagenta)
  //   .attr("stroke-width", 1.5);
  // const switchGraphs = (n) => {
  //   dummyGraph.attr("stroke", themeBackground);
  //   nValue.current = n;
  //   movingGraph.transition().duration(300).attr("d", line(allValues[n]));
  //   // setNValue(n);
  // };

  return (
    <div
      style={{
        width: width,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
      }}
    >
      <CanvasCard height={height} width={width}>
        <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
      </CanvasCard>
    </div>
  );
};

export default MaclaurinGraph;
