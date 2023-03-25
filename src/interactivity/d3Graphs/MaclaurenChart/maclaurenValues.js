import { factorialArray } from "utils/utils";
import Big from "big.js";

const factorials = factorialArray(24);

const allValues = [[]];

const allValuesArray = (min = -2 * Math.PI, max = 4 * Math.PI, freq = 0.1) => {
  const oneBig = new Big(1);
  for (let k = min; k <= max; k += freq) {
    allValues[0].push([k, oneBig]);
  }
  if (allValues[0][allValues[0].length - 1][0] < max)
    allValues[0].push([max, oneBig]);
  for (let n = 1; n <= 12; n++) {
    allValues[n] = [];
    const sign = n % 2 === 0 ? 1 : -1;
    const denominator = new Big(factorials[2 * n]);
    let idx = 0;
    for (let x = min; x <= max; x += freq) {
      const xBig = new Big(x);
      // const contribution = sign * (j ** (2 * i) / denominator);
      const contribution = xBig
        .pow(2 * n)
        .div(denominator)
        .times(sign);
      const value = allValues[n - 1][idx++][1];
      allValues[n].push([x, value.plus(contribution)]);
    }
    idx = 0;
    if (allValues[n][allValues[n].length - 1][0] < max) {
      // const contribution = sign * (max ** (2 * i) / denominator);
      const xBig = new Big(max);
      const contribution = xBig
        .pow(2 * n)
        .div(denominator)
        .times(sign);
      const value = allValues[n - 1][idx][1];
      allValues[n].push([max, value.plus(contribution)]);
    }
  }
  console.log(allValues);
  const returnValues = allValues.map(
    (row) => row.map((val) => [val[0], val[1].toNumber()])
    // .filter((val) => Math.abs(val[1]) < 3)
  );
  console.log(returnValues);
  return returnValues;
};

export default allValuesArray;
