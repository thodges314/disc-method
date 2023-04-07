import CanvasCard from "components/interface/CanvasCard";
import ControlsCard from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup } from "@mui/material";
import EqnDisplay from "./EqnDisplay";

import * as d3 from "d3";
import { useRef, useEffect } from "react";
// import allValuesArray from "./maclaurenValues";
// import cosValuesArray from "./cosineValues";
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

const x_scale = d3.scaleLinear().domain([-5.5, 5.5]).range([0, width]);

const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 5, (4 * y_distance) / 5])
  .range([height, 0]);

const HandKChart = () => {
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const allValuesRef = useRef(null);
  const svgRef = useRef(null);
  const childRef = useRef(null);

  // static portion
  useEffect(() => {
    // const cosValues = cosValuesArray();
    // allValuesRef.current = allValuesArray();
    const xAxisGenerator = d3.axisBottom(x_scale);
    const yAxisGenerator = d3.axisLeft(y_scale);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]));
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
    svgRef.current = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    const xAxis = svgRef.current
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height / 2})`)
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
      .attr("class", "y-axis")
      .attr("transform", `translate(${x_scale(0)},0)`)
      .call(yAxisGenerator);

    yAxis.select(".domain").attr("stroke", hexToRgba(synthCyberPaleBlue));
    yAxis
      .selectAll("text")
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1)
      .attr("font-size", "1.5em");
    yAxis.selectAll("line").attr("stroke", hexToRgba(synthCyberPaleBlue));

    // svgRef.current
    //   .append("path")
    //   .datum(cosValues)
    //   .attr("stroke", sunsetMagenta)
    //   .attr("stroke-width", 5)
    //   .attr("d", lineRef.current)
    //   .attr("fill", "none")
    //   .attr("fill-opacity", 0);

    // movingGraphRef.current = svgRef.current
    //   .append("path")
    //   .datum(allValuesRef.current[0])
    //   .attr("stroke", sunsetYellow)
    //   .attr("stroke-width", 1.5)
    //   .attr("d", lineRef.current)
    //   .attr("fill-opacity", 0)
    //   .attr("fill", "none");
  }, []);

  // const switchGraphs = (n) => {
  //   movingGraphRef.current
  //     .transition()
  //     .duration(300)
  //     .attr("d", lineRef.current(allValuesRef.current[n]));
  //   childRef.current.setEqn(n);
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
      <EqnDisplay ref={childRef} />
      <FormGroup>
        <ControlsCard>
          <CustomSlider
            onChange={(_evt, newValue) => switchGraphs(newValue)}
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

export default HandKChart;
