let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum = sum + numbers[index];
}

console.log('A soma é: ' + sum);

let average = sum/numbers.length;

console.log('A média aritmética é: ' + average);