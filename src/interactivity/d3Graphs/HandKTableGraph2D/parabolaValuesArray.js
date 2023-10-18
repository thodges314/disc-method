const allValues = [];

const parabolaValuesArray = (min = -4, max = 4, freq = 1) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([k, k ** 2]);
  }
  return allValues;
};

export default parabolaValuesArray;
