let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function numberOfFruits(array) {
  let newBasket = array;
  let fruit;
  let basketFruit;
  let result = {};
  function checkFruit(value) {
    return value === fruit;
  }
  function eraseFruit(value) {
    return value !== fruit;
  }
  while (newBasket.length > 0) {
    fruit = newBasket[0];
    basketFruit = newBasket.filter(checkFruit);
    result[fruit] = basketFruit.length;
    newBasket = newBasket.filter(eraseFruit);
  }
  return result;
}

const fruitList = numberOfFruits(basket);

// console.log(numberOfFruits(basket));
// console.log(basket);
console.log(fruitList);

let allMessage = [];

for(let key in fruitList) { 
  let message = `${fruitList[key]} ${key}`;
  if (fruitList[key] > 1) {
    message += 's';
  }
  allMessage.push(message);
}

// console.log(`Sua cesta possui: ${allMessage.join(', ')}.`)
