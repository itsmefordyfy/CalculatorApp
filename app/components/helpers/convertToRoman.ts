export const convertToRoman = (value: string) => {
  let number = parseInt(value);

  let numberArr: Array<number> = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  let RomanArr: Array<string> = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let result: Array<string> = [];

  const findElement = e => {
    return e <= number;
  };

  while (number > 0) {
    let nextHighest: any = numberArr.find(findElement);

    result.push(RomanArr[numberArr.indexOf(nextHighest)]);
    number -= nextHighest;
  }
  let newResult = result.join('');

  return newResult;
};