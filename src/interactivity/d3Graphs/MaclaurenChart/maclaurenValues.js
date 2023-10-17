import { factorialArray } from "utils/utils";
import Big from "big.js";

const factorials = factorialArray(24);

const allValues = [[]];

const allValuesArray = (min = -2, max = 4, freq = 0.0625) => {
  const oneBig = new Big(1);
  for (let k = min; k <= max; k += freq) {
    allValues[0].push([k * Math.PI, oneBig]);
  }
  for (let n = 1; n <= 12; n++) {
    allValues[n] = [];
    const sign = n % 2 === 0 ? 1 : -1;
    const denominator = new Big(factorials[2 * n]);
    let idx = 0;
    for (let x = min; x <= max; x += freq) {
      const xBig = new Big(x * Math.PI);
      const contribution = xBig
        .pow(2 * n)
        .div(denominator)
        .times(sign);
      const value = allValues[n - 1][idx++][1];
      allValues[n].push([x * Math.PI, value.plus(contribution)]);
    }
    idx = 0;
  }
  const returnValues = allValues.map((row) =>
    row.map((val) => [val[0], val[1].toNumber()])
  );
  return returnValues;
};

export default allValuesArray;
