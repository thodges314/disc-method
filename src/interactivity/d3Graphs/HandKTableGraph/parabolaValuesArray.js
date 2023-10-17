const allValues = [];

const parabolaValuesArray = (min = -3, max = 3, freq = 1) => {
  for (let k = min; k <= max; k += freq) {
    allValues.push([k, k ** 2]);
  }
  return allValues;
};

export default parabolaValuesArray;
