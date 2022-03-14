export const rnd = (count: number, maxValue: number) => {
  const res: number[] = [];
  while (res.length < count) {
    const random = Math.floor(Math.random() * maxValue) + 1;
    if (res.indexOf(random) === -1) {
      res.push(random);
    }
  }
  return res;
};

export const handleCalculateWinner = (
  firstField: number[],
  secondField: number[],
  randomFirstField: number[],
  randomSecondField: number[],
) => {
  const countValueInFirstField = firstField.reduce((acc, value) => {
    return randomFirstField.includes(value) ? acc + 1 : acc;
  }, 0);
  const countValueInSecondField = secondField.reduce((acc, value) => {
    return randomSecondField.includes(value) ? acc + 1 : acc;
  }, 0);

  if (countValueInFirstField === 4) {
    return true;
  }
  if (countValueInFirstField >= 3 && countValueInSecondField === 1) {
    return true;
  }
  return false;
};

export const handleIsWon = (firstField: number[], secondField: number[], maxValue: number) => {
  const randomFirstField = rnd(8, maxValue);
  const randomSecondField = rnd(2, maxValue);
  // const countValueInFirstField = firstField.reduce((acc, value) => {
  //   return randomFirstField.includes(value) ? acc + 1 : acc;
  // }, 0);
  // const countValueInSecondField = secondField.reduce((acc, value) => {
  //   return randomSecondField.includes(value) ? acc + 1 : acc;
  // }, 0);

  // if (countValueInFirstField === 4) {
  //   return true;
  // }
  // if (countValueInFirstField >= 3 && countValueInSecondField === 1) {
  //   return true;
  // }
  return handleCalculateWinner(firstField, secondField, randomFirstField, randomSecondField);
};
