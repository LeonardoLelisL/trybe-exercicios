const checkNumber = (myNumber, drawNumber) => myNumber === drawNumber;

const loterryResult = (myNumber, checkNumber) => {
  const drawNumber = Math.floor(Math.random() * 5 + 1);
  return checkNumber(myNumber, drawNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(loterryResult(3, checkNumber));