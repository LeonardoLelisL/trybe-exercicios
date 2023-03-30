let n = 5;
let inputLine = '';
let mid = (n + 1) / 2;

for (let index = 0; index < mid; index += 1){

  for (let index2 = 1; index2 <= n; index2 += 1) {

    if (index2 < mid - index || index2 >  mid + index){
      inputLine += ' ';      
    } else {
      inputLine += '*';
    }

  }

  console.log(inputLine);
  inputLine = '';
}
