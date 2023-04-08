const marksArray = (min, max) => {
  const marksArray = [];
  for (let i = min; i <= max; i++) {
    marksArray.push({ value: i, label: `${i}` });
  }
  return marksArray;
};

export default marksArray;
