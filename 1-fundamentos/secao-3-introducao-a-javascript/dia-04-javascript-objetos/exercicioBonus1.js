let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
console.log('Exercício 1')
console.log();
function addKey(object, key, value) {
  object[key] = value;
}

addKey(lesson2, 'turno', 'noite');
console.log(lesson2);

//Exercício 2

function keyList(object) {
  return Object.keys(object);    
}

console.log();
console.log('Exercício 2');
console.log();
console.log(keyList(lesson2));
