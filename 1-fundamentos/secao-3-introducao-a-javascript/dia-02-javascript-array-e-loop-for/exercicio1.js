let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let highernumber = numbers [0];
let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);

  sum = sum + numbers[index];

  if (numbers[index] > highernumber) {
    highernumber = numbers[index];
  }

  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }

}

console.log('A soma é: ' + sum);

let average = sum/numbers.length;

console.log('A média aritmética é: ' + average);

if (average > 20) {
  console.log('Valor maior que 20') ;
} else {
  console.log('Valor menor ou igual a 20');
}

console.log('O maior valor é: ' + highernumber);

if (impar > 0) {
  console.log('O array possui ' + impar + ' valores ímpares');
} else {
  console.log('Nenhum valor ímpar encontrado');
}
