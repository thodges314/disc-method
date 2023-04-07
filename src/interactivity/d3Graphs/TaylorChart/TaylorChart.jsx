import CanvasCard from "components/interface/CanvasCard";
import ControlsCard from "components/interface/ControlsCard";
import EquationCard from "components/interface/EquationCard";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup } from "@mui/material";
import { equationArray } from "./maclaurinSvgs/equations";

import * as d3 from "d3";
import { useRef, useEffect, useMemo, useState, useLayoutEffect } from "react";
import allValuesArray from "./maclaurenValues";
import cosValuesArray from "./cosineValues";
import lnValuesArray from "./lnValuesArray";
import { hexToRgba } from "utils/utils";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

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
  const equationRef = useRef(null);
  const line = d3
    .line()
    .x((d) => x_scale(d[0]))
    .y((d) => y_scale(d[1]));
  const [cosValues, allValues] = lnValuesArray();
  // const allValues = allValuesArray();
  let movingGraph;
  // let formulaField;
  let equationDisplay;

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    const eqnSvg = d3
      .select(equationRef.current)
      .attr("height", 64)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    // const [cosValues, allValues] = lnValuesArray();

    //axis
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    xAxisGenerator.tickValues([1, 2, 3, 4, 5]);
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

    equationDisplay = eqnSvg
      .append("g")
      .append("image")
      .attr("xlink:href", equationArray[0])
      .attr("transform", `translate(12, 11)`);

    xAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    xAxis
      .selectAll("text")
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1)
      .attr("font-size", "1.5em");
    xAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis
      .selectAll("text")
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1)
      .attr("font-size", "1.5em");
    yAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));

    svg
      .append("path")
      .datum(cosValues)
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 1.5)
      .attr("d", line)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    movingGraph = svg
      .append("path")
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 3.5)
      .attr("fill-opacity", 0)
      .attr("fill", "none")
      .attr("d", line(allValues));

    // formulaField = svg.append("div");
  }, []);

  // const switchGraphs = (n) => {
  //   movingGraph.transition().duration(300).attr("d", line(allValues[n]));
  //   equationDisplay.attr("xlink:href", equationArray[n]);
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
      <EquationCard>
        <svg id="equations" ref={equationRef} fillOpacity="0" fill="none"></svg>
      </EquationCard>
      <FormGroup>
        <ControlsCard>
          <CustomSlider
            // onChange={(_evt, newValue) => switchGraphs(newValue)}
            min={0}
            max={11}
            step={1}
            size="small"
            valueLabelDisplay="auto"
            marks
            sx={{
              ml: 1,
              mr: 1,
              mt: 1,
            }}
          />
        </ControlsCard>
      </FormGroup>
    </div>
  );
};

export default TaylorChart;
