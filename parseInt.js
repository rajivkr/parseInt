const parseStringToInt = (inputStr) => {
  const reg = /^\d+$/;
  let numberbase = 1,
    negativeNum = false;
  const inputStrAsArr = inputStr.split('');
  if (inputStrAsArr[0] !== '-' && inputStr.search(reg)) {
    throw new Error('expected number');
  }
  if (inputStrAsArr[0] === '-') {
    negativeNum = true;
    inputStrAsArr.shift();
  }
  const convertedVal = inputStrAsArr.reduceRight((prev, accum) => {
    const result = accum * numberbase + prev;
    numberbase *= 10;
    return result;
  }, 0);
  return negativeNum ? -convertedVal : convertedVal;
};

const cachedResults = {};
const memoizedParseInt = (input) => {
  if (cachedResults[input]) {
    return cachedResults[input];
  }
  const output = parseStringToInt(input);
  cachedResults[input] = output;
  return output;
};

export default memoizedParseInt;
