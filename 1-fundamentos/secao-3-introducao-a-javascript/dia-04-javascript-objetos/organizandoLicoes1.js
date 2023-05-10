const romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function singleRomanNumeral(string) {
  return romanNumeral[string.toUpperCase()];
}

function biggerRomanNumeral(string) {
  const separatedRomanNumeral = string.toUpperCase().split('');
  let sum = romanNumeral[separatedRomanNumeral[separatedRomanNumeral.length -1]];
  for (let index = separatedRomanNumeral.length -1; index > 0; index -= 1) {
    if (romanNumeral[separatedRomanNumeral[index]] > romanNumeral[separatedRomanNumeral[index - 1]]) {
      sum -= romanNumeral[separatedRomanNumeral[index - 1]];
    }
    else {
      sum += romanNumeral[separatedRomanNumeral[index -1]];
    }
  }
  return sum; 
}

function romanNumeralToNumber(string) {
  let answer = 0;
  if (string.length === 1) {
    answer = singleRomanNumeral(string);
  } else {
    answer = biggerRomanNumeral(string);
  }
  return answer;
}

console.log(romanNumeralToNumber('iX'));
console.log(romanNumeralToNumber('X'));
console.log(romanNumeralToNumber('xi'));
console.log(romanNumeralToNumber('XCIX'));
console.log(romanNumeralToNumber('CDXIX'));
console.log(romanNumeralToNumber('CCCXXIX'));
