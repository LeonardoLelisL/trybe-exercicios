let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 1

console.log('Bem-vinda, ' + info.personagem);

//Exercício 2

console.log();
info['recorrente'] = 'Sim';
console.log(info);

//Exercício 3

console.log();
for (let key in info){
  console.log(key);
}
