import { useRef, useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import ShiftingTable from "./ShiftingTable";
import ControlsCard, { ControlsRow } from "components/interface/ControlsCard";
import CustomSlider from "components/interface/CustomSlider";
import CanvasCard from "components/interface/CanvasCard";
import { hexToRgba } from "utils/utils";
import { marksArray } from "../utilities";
import {
  synthSunsetMagenta,
  synthSunsetYellow,
  synthCyberPaleBlue,
  synthCyberPink,
} from "interactivity/resources/constants/colors";
import parabolaValuesArray from "./parabolaValuesArray";

import ShiftingUnit from "./ShiftingTable/ShiftingUnit";
import ShiftingTableComponent from "./ShiftingTable/ShiftingTable";

import { Button, FormGroup } from "@mui/material";

const sunsetMagenta = hexToRgba(synthSunsetMagenta, 1);
const sunsetYellow = hexToRgba(synthSunsetYellow, 1);
const cyberPink = hexToRgba(synthCyberPink);

const goldenRatio = (1 + 5 ** 0.5) / 2;
const height = 400;
const width = height * goldenRatio;
const x_distance = 3 * Math.PI;
const y_distance = x_distance / goldenRatio;

const x_scale = d3.scaleLinear().domain([-5.5, 5.5]).range([0, width]);
const y_scale = d3
  .scaleLinear()
  .domain([-y_distance / 5, (y_distance * 4) / 5])
  .range([height, 0]);

const HandKTableGraph = () => {
  const tableRef = useRef(null);
  const newTableRef = useRef(null);
  const chartRef = useRef(null);
  const movingGraphRef = useRef(null);
  const lineRef = useRef(null);
  const svgRef = useRef(null);
  const marks = useMemo(() => marksArray(-5, 5), []);
  // const [showComponent, setShowComponent] = useState(false);
  const shiftingUnitRef = useRef(null);

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
    yAxisGenerator.tickValues([-1, 1, 2, 3, 4]).tickFormat(d3.format("d"));

    svgRef.current = d3
      .select(chartRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("fill", "none")
      .attr("fill-opacity", 0);

    const xAxis = svgRef.current
      .append("g")
      .attr("class", "x-axis")
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

    movingGraphRef.current = svgRef.current
      .append("path")
      .datum(parabolaValues)
      .attr("stroke", sunsetYellow)
      .attr("stroke-width", 1.5)
      .attr("d", lineRef.current)
      .attr("fill-opacity", 0)
      .attr("fill", "none");
  });

  const shiftGraph = (h) => {
    movingGraphRef.current
      .transition()
      .duration(750)
      .attr("transform", `translate(${x_scale(h) - width / 2},0)`);
  };

  const updateValue = (h) => {
    shiftGraph(h);
    shiftingUnitRef.current.setNewValue(h);
  };
  const square = (n) => n ** 2;

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
        <CanvasCard height={height} width={width}>
          <svg id="chart" ref={chartRef} fillOpacity="0" fill="none"></svg>
        </CanvasCard>
      </div>
      <ShiftingTable ref={tableRef} />
      <ShiftingTableComponent ref={newTableRef} />
      <FormGroup>
        {/* 
          <Button
            onClick={() => {
              shiftGraph(-1);
              tableRef.current.offsetDown();
            }}
          >
            -1
          </Button>
 */}
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
                  onChange={(_evt, newValue) => updateValue(newValue)}
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
      {/* <Button onClick={() => setShowComponent(!showComponent)}>show</Button> */}
      <div css={{ position: "absolute", width: 100 }}>
        <ShiftingUnit
          initialValue={4}
          colorValue={sunsetYellow}
          // fcn={square}
          ref={shiftingUnitRef}
        />
      </div>
    </>
  );
};

export default HandKTableGraph;
