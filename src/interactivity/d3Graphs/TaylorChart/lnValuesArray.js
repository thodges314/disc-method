const allValues = [];
const allValuesTruncated = [];

const lnValuesArray = (min = 0, max = 5.25, freq = 0.025) => {
  for (let k = min + freq; k <= max; k += freq) {
    allValues.push([k, Math.log(k)]);
  }
  if (allValues[allValues.length - 1][0] < max)
    allValues.push([max, Math.log(max)]);
  // allValues.push([100, 100]);
  // allValues.push([-100, 100]);
  // allValues.push([max, 100]);
  // allValues.push([min, 100]);
  const allValuesTruncated = allValues.filter((x) => x[0] <= 4);
  return [allValues, allValuesTruncated];
};

export default lnValuesArray;
