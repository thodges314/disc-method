import { useRef, useEffect } from "react";
import * as d3 from "d3";
import CanvasCard from "components/interface/CanvasCard";
import DisplayEquation from "components/interface/DisplayEquation";

import "./LabeledRightTriangleGraph.css";

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 300;
const width = height * goldenRatio;
const x_distance = 11;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-5.5, 5.5]).range([0, width]);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 5, (y_distance * 4) / 5])
  .range([height, 0]);

const unit = y_scale(0) - y_scale(1);

const LabeledRightTriangleGraph = () => {
  const chartRef = useRef(null);
  const eqn1_ref = useRef(null);
  const eqn2_ref = useRef(null);
  const eqn3_ref = useRef(null);
  const eqn4_ref = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);

  const triangleData = [
    [-4, 0],
    [4, 4.5],
  ];

  const boxCornerData = [
    [3.5, 0.5],
    [4, 0.5],
  ];

  useEffect(() => {
    const xAxisGridGenerator = d3.axisBottom(x_scale);
    const yAxisGridGenerator = d3.axisLeft(y_scale);
    const area = d3
      .area()
      .x((d) => x_scale(d[0]))
      .y0((d) => y_scale(d[1]))
      .y1(y_scale(0));
    const trianglePath = area(triangleData);
    const boxCornerPath = area(boxCornerData);
    lineRef.current = d3
      .line()
      .x((d) => x_scale(d[0]))
      .y((d) => y_scale(d[1]));
    xAxisGridGenerator
      .tickValues([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
      .tickFormat("")
      .tickSize(height);

    yAxisGridGenerator
      .tickValues([-1, 0, 1, 2, 3, 4, 5])
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
      .append("path")
      .attr("d", trianglePath)
      .classed("medium-sunset-yellow-path", true);

    svgRef.current
      .append("path")
      .attr("d", boxCornerPath)
      .classed("medium-sunset-yellow-path", true);

    const start_angle = Math.atan(8 / 4.5);
    const end_angle = Math.PI / 2;
    const arc_radius = x_scale(1) - x_scale(0);

    const myArc = d3
      .arc()
      .innerRadius(arc_radius)
      .outerRadius(arc_radius)
      .startAngle(start_angle)
      .endAngle(end_angle);

    const slice = myArc();
    svgRef.current
      .append("path")
      .datum(slice)
      .attr("d", (d) => d)
      .classed("medium-sunset-yellow-path", true)
      .attr("transform", `translate(${x_scale(-4)},${y_scale(0)})`);

    d3.select(eqn1_ref.current)
      .style("top", 5.25 * unit + "px")
      .style("left", 4.5 * unit + "px");

    d3.select(eqn2_ref.current)
      .style("top", 2.2 * unit + "px")
      .style("left", 5 * unit + "px");

    d3.select(eqn3_ref.current)
      .style("top", 2.7 * unit + "px")
      .style("left", 9.4 * unit + "px");

    d3.select(eqn4_ref.current)
      .style("top", 4.6 * unit + "px")
      .style("left", 2.4 * unit + "px");
  });

  return (
    <>
      <CanvasCard height={height} width={width}>
        <div style={{ position: "relative" }}>
          <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
          <div style={{ position: "absolute" }} ref={eqn1_ref}>
            <DisplayEquation
              style={{ color: "#d3d3d3" }}
            >{`$$\\sqrt{1-x^2}$$`}</DisplayEquation>
          </div>
          <div style={{ position: "absolute" }} ref={eqn2_ref}>
            <DisplayEquation
              style={{ color: "#ffd319" }}
            >{`$$1$$`}</DisplayEquation>
          </div>
          <div style={{ position: "absolute" }} ref={eqn3_ref}>
            <DisplayEquation
              style={{ color: "#ffd319" }}
            >{`$$x$$`}</DisplayEquation>
          </div>
          <div style={{ position: "absolute" }} ref={eqn4_ref}>
            <DisplayEquation
              style={{ color: "#ffd319" }}
            >{`$$y$$`}</DisplayEquation>
          </div>
        </div>
      </CanvasCard>
    </>
  );
};

export default LabeledRightTriangleGraph;
