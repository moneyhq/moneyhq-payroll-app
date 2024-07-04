const generateMultiples = (limit, totalPages) => {
  const result = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(limit * i);
  }
  return result;
};

const generateLabeledMultiples = (limit, totalPages) => {
  const result = [];
  for (let i = 1; i <= totalPages; i++) {
    const value = limit * i;
    result.push({ label: value, value: value });
  }
  return result;
};

export { generateMultiples, generateLabeledMultiples };
