import CanvasCard from "components/interface/CanvasCard";
import * as d3 from "d3";
import { useRef, useEffect } from "react";
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
// .ticks(7);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

const MaclaurinChart = () => {
  const chartRef = useRef(null);
  let movingGraph;
  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width);
    svg
      .append("clipPath")
      .attr("id", "chart-area")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

    const allValues = allValuesArray();
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

    const line = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]));

    svg
      .append("path")
      .datum(cosValues) //.attr("clip-path", "url(#chart-area)").attr("
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 2)
      .attr("d", line)
      .style("fill", "none")
      .style("fill-opacity", 0);

    movingGraph = svg
      .append("path")
      .datum(allValues[12]) //.attr("clip-path", "url(#chart-area)").attr("
      .style("fill", "none")
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5)
      .attr("d", line);

    movingGraph.transition().duration(3000).attr("d", line(allValues[11]));
  });
  return (
    <CanvasCard height={height} width={width}>
      <svg id="chart" ref={chartRef}></svg>
    </CanvasCard>
  );
};

export default MaclaurinChart;
