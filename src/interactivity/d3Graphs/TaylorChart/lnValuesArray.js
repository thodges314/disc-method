const allValues = [];

const lnValuesArray = (min = 0, max = 5.25, freq = 0.05) => {
  for (let k = min + freq; k <= max; k += freq) {
    allValues.push([k, Math.log(k)]);
  }
  const allValuesTruncated = allValues.filter((x) => x[0] <= 4);
  return [allValues, allValuesTruncated];
};

export default lnValuesArray;
