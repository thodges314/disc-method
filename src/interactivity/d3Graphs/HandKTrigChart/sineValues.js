const allValues = [];

const cosValuesArray = (min = -2 * Math.PI, max = 4 * Math.PI, freq = 0.1) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([k, Math.sin(k)]);
  }
  if (allValues[allValues.length - 1][0] < max)
    allValues.push([max, Math.sin(max)]);
  return allValues;
};

export default cosValuesArray;
