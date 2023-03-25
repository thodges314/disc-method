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
// .ticks(7);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 2, y_distance / 2])
  .range([height, 0]);

const MaclaurinChart = () => {
  const chartRef = useRef(null);
  // const [nValue, setNValue] = useState(0);
  const nValue = useRef(0);
  const line = d3
    .line()
    .x((d) => x_scale(d[0]))
    .y((d) => y_scale(d[1]));
  const allValues = allValuesArray();
  let movingGraph;
  let dummyGraph;

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
    // .style("fill", "none")
    // .style("fill-opacity", 0);

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

    // const line = d3
    //   .line()
    //   .x((d) => x_scale(d[0]))
    //   .y((d) => y_scale(d[1]));

    svg
      // .style("fill", "none")
      // .style("fill-opacity", 0)
      // .attr("fill", "none")
      // .attr("fill-opacity", 0)
      // .select("#cosine")
      .append("path")
      .datum(cosValues) //.attr("clip-path", "url(#chart-area)").attr("
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("fill", "none");
    // .style("fill", "none")
    // .style("fill-opacity", 0);
    // .classed("cosline", true);

    movingGraph = svg
      .append("path")
      // .class("movingpath")
      // .datum(allValues[0]) //.attr("clip-path", "url(#chart-area)").attr("
      // .style("fill", "none")
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5)
      .attr("fill-opacity", 0)
      .attr("fill", "none");
    // .attr("d", line(allValues[nValue.current]));
    // movingGraph.classed("movingpath", true);
    // movingGraph.classed("movingpath", true);
    // movingGraph.classed("movingpath", true);
    // movingGraph.transition().duration(0).attr("d", line(allValues[0]));
    dummyGraph = svg
      .append("path")
      .attr("d", line(allValues[0]))
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5);

    // movingGraph.transition().duration(3000).attr("d", line(allValues[11]));
  }, [allValues]);
  // movingGraph.transition().duration(0).attr("d", line(allValues[0]));
  // dummyGraph = svg
  //   .append("path")
  //   .attr("d", line(allValues[0]))
  //   .attr("stroke", sunsetMagenta)
  //   .attr("stroke-width", 1.5);
  const switchGraphs = (n) => {
    dummyGraph.attr("stroke", themeBackground);
    nValue.current = n;
    movingGraph.transition().duration(300).attr("d", line(allValues[n]));
    // setNValue(n);
  };

  // useEffect(() => {
  //   movingGraph
  //     .transition()
  //     .duration(300)
  //     .attr("d", line(allValues[nValue.current]));
  // }, [nValue.current]);

  // const switchGraphs = (n) =>
  //   movingGraph
  //     .transition()
  //     .duration(500)
  //     .attrTween("d", (d) => {
  //       const prev = d3.select(this).attr("d");
  //       const next = line(allValues[n]);
  //       return interpolatePath(prev, next);
  //     });

  // switchGraphs = (n) => setNValue(n);
  // const switchGraphs = (n) =>
  //   movingGraph
  //     .transition()
  //     .duration(1500)
  //     .datum(allValues[n], (d) => d[0])
  //     .attr("d", line);
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
        <svg id="chart" ref={chartRef} fillOpacity="0" fill="none">
          {/* <path id="cosine" fill-opacity="0" fill="none" /> */}
        </svg>
      </CanvasCard>
      <FormGroup>
        <ControlsCard>
          {/* <FormControlLabel
            control={ */}
          <CustomSlider
            onChange={(_evt, newValue) => switchGraphs(newValue)}
            // value={0}
            min={0}
            max={12}
            step={1}
            size="small"
            valueLabelDisplay="auto"
            sx={{
              ml: 1,
              mr: 1,
              mt: 1,
            }}
          />
          {/* } */}
          {/* label="Rotate Graph"
          /> */}
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default MaclaurinChart;
