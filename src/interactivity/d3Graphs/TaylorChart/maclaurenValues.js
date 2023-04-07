import { factorialArray } from "utils/utils";
import Big from "big.js";

const factorials = factorialArray(24);

const allValues = [[]];

const allValuesArray = (min = -2 * Math.PI, max = 4 * Math.PI, freq = 0.1) => {
  const oneBig = new Big(1);
  const oneHundredBig = new Big(1000);
  // const negOneHundredBig = new Big(-100);
  for (let k = min; k <= max; k += freq) {
    allValues[0].push([k, oneBig]);
  }
  if (allValues[0][allValues[0].length - 1][0] < max)
    allValues[0].push([max, oneBig]);
  allValues[0].push([max, oneHundredBig]);
  allValues[0].push([min, oneHundredBig]);
  for (let n = 1; n <= 12; n++) {
    allValues[n] = [];
    const sign = n % 2 === 0 ? 1 : -1;
    const denominator = new Big(factorials[2 * n]);
    let idx = 0;
    for (let x = min; x <= max; x += freq) {
      const xBig = new Big(x);
      const contribution = xBig
        .pow(2 * n)
        .div(denominator)
        .times(sign);
      const value = allValues[n - 1][idx++][1];
      allValues[n].push([x, value.plus(contribution)]);
    }
    idx = 0;
    if (allValues[n][allValues[n].length - 1][0] < max) {
      const xBig = new Big(max);
      const contribution = xBig
        .pow(2 * n)
        .div(denominator)
        .times(sign);
      const value = allValues[n - 1][idx][1];
      allValues[n].push([max, value.plus(contribution)]);
      // allValues[n].push([max, value.plus(contribution)]);
      // allValues[n].push([max, value.plus(contribution)]);
    }
    allValues[n].push([max, oneHundredBig]);
    allValues[n].push([min, oneHundredBig]);
  }
  const returnValues = allValues.map((row) =>
    row.map((val) => [val[0], val[1].toNumber()])
  );
  return returnValues;
};

export default allValuesArray;
