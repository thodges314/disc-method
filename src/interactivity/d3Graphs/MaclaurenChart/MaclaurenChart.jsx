import CanvasCard from "components/interface/CanvasCard";
import ControlsCard from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import { FormGroup } from "@mui/material";
import MyEquation from "./equation.svg";
// import {tex2svg} from 'Ma'
import Equation from "./Equation";

import * as d3 from "d3";
import { useRef, useEffect, useMemo, useState, useLayoutEffect } from "react";
import allValuesArray from "./maclaurenValues";
import cosValuesArray from "./cosineValues";
import FunctionDisplay from "./FunctionDisplay";
import { hexToRgba } from "utils/utils";
import equationArray, { equationArray2 } from "./equationArray";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthCyberPaleBlue,
} from "interactivity/resources/constants/colors";

// import { MathJax } from "better-react-mathjax";
// import MathJax, { tex2svg } from "mathjax";
// import TeXToSVG from "tex-to-svg";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

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

// let dd = 0;

const MaclaurinChart = () => {
  const chartRef = useRef(null);
  // const functionRef = useRef(0);
  const [dd, setDD] = useState(0);
  let derp = 0;
  const line = d3
    .line()
    .x((d) => x_scale(d[0]))
    .y((d) => y_scale(d[1]));
  const allValues = allValuesArray();
  let movingGraph;
  let formulaField;
  let equationDisplay;

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

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

    equationDisplay = svg
      .append("g")
      .append("image")
      // .append("xml")

      // .append("text")
      .attr("transform", `translate(20,${height - 50})`)
      .attr("fill", hexToRgba(synthCyberPaleBlue))
      .attr("fill-opacity", 1);
    // .attr("font-size", "1.5em");
    // .text("derp");

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
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    movingGraph = svg
      .append("path")
      .attr("stroke", sunsetMagenta)
      .attr("stroke-width", 1.5)
      .attr("fill-opacity", 0)
      .attr("fill", "none")
      .attr("d", line(allValues[0]));

    formulaField = svg.append("div");
  }, [allValues]);

  const switchGraphs = (n) => {
    movingGraph.transition().duration(300).attr("d", line(allValues[n]));
    // console.log(MyEquation);
    // equationDisplay.attr(<Equation />);
    equationDisplay.attr("xlink:href", MyEquation);
    // equationDisplay.html(
    //   <MathJax.Context>
    //     <TeXToSVG
    //       tex={MyEquation}
    //       svgOptions={{
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     />
    //   </MathJax.Context>
    // );
    // .append("text")
    // .attr("fill", hexToRgba(synthCyberPaleBlue))
    // .attr("fill-opacity", 1)
    // .attr("font-size", "1.5em")
    // .text(equationArray[n]);
    // .append(() => MathJax.tex2svg(equationArray2[n]));
    // .append("div")
    // .html(Equation);
    // .appendSVG(Equation);
    // .attr(equationArray2[n]);
    // equationDisplay.text(() => equationArray2[n]); //.append("text").text(equationArray2[n]);
    // .on("start", () => {
    //   // console.log(n);
    //   // setDD(n);
    //   // derp = n;
    // });
    // console.log(movingGraph);
    // setDD(n);
  };

  const canvasCard = useMemo(() => (
    <CanvasCard height={height} width={width}>
      <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
    </CanvasCard>
  ));

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
      <Equation />
      {/* {canvasCard} */}
      {/* <FunctionDisplay dd={dd} /> */}
      {/* {dd} */}
      <FormGroup>
        <ControlsCard>
          <CustomSlider
            onChange={(_evt, newValue) => switchGraphs(newValue)}
            min={0}
            max={12}
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

export default MaclaurinChart;
