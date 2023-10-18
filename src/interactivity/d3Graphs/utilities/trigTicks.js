import * as d3 from "d3";

const trigTicks = (scle) => {
  const min = scle.domain()[0] / Math.PI;
  const max = scle.domain()[1] / Math.PI;
  const intTicks = d3
    .scaleLinear()
    .domain([min, max])
    .ticks()
    .filter(Number.isInteger)
    .filter((d) => !!d);
  const ticks = intTicks.map((d) => d * Math.PI);
  const formattedTicks = intTicks.map((d) => `${d}π`);
  return { ticks, formattedTicks };
};

export default trigTicks;
