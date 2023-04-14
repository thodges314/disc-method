import { synthSunsetYellow } from "interactivity/resources/constants/colors";
import { hexToRgba, reduceFraction } from "utils/utils";

const sunsetYellow = hexToRgba(synthSunsetYellow, 1);

const formatNumerator = (numerator) => {
  if (numerator === 0) {
    return `0`;
  }
  if (numerator === 1) {
    return `\\pi`;
  }
  return ` ${numerator}\\pi `;
};

const formatFraction = (num) => {
  const { numerator, denominator } = reduceFraction(num, 12);
  if (denominator === 1) {
    return formatNumerator(numerator);
  }
  return `\\frac{${formatNumerator(numerator)}}{${denominator}}`;
};

const equationArray = [`$ {\\color{${sunsetYellow}}{y=\\cos{(\\theta)}}} $`];

for (let i = 1; i <= 24; i += 1) {
  equationArray.push(
    `$$ {\\color{${sunsetYellow}}{y=\\cos{\\left (\\theta-${formatFraction(
      i
    )} \\right )}}} $$`
  );
}

export default equationArray;
