let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  const answer = [];
  for (let value of vector){
    for (let value2 of value){
      if (value2 % 2 === 0){
        answer.push(value2);
      }
    }
  }
  return answer;
}

console.log(arrayOfNumbers(vector));