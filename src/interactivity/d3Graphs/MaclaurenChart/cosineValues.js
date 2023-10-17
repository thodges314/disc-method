const allValues = [];

const cosValuesArray = (min = -2, max = 4, freq = 0.125) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([Math.PI * k, Math.cos(Math.PI * k)]);
  }
  // if (allValues[allValues.length - 1][0] < max)
  //   allValues.push([max, Math.cos(max)]);
  return allValues;
};

export default cosValuesArray;
