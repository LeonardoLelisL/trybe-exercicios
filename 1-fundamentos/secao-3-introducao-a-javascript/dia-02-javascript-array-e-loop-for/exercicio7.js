let n = 5;
let symbol = '*';
let inputLine = '';
let space = ' ';

for (let index = 1; index <= n; index +=1){

  for (let index2 = 0; index2 < n - index; index2 += 1) {
    inputLine += space;
  }

  for (let index3 = 0; index3 < index; index3 += 1){
    inputLine += symbol;
  }

  console.log(inputLine);
  inputLine = '';
}
