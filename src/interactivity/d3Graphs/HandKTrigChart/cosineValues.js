const allValues = [];

const cosValuesArray = (min = -4, max = 4, freq = 0.25) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([k * Math.PI, Math.cos(k * Math.PI)]);
  }
  return allValues;
};

export default cosValuesArray;
