const allValues = [];

const cosValuesArray = (min = -2, max = 4, freq = 0.125) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([Math.PI * k, Math.sin(Math.PI * k)]);
  }
  return allValues;
};

export default cosValuesArray;
