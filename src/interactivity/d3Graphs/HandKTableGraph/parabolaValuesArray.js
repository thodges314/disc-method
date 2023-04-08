const allValues = [];

const parabolaValuesArray = (min = -3, max = 3, freq = 0.1) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([k, k ** 2]);
  }
  if (allValues[allValues.length - 1][0] < max) allValues.push([max, max ** 2]);
  return allValues;
};

export default parabolaValuesArray;
