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

console.log();
console.log('Exercício 2');
console.log();

function keyList(object) {
  return Object.keys(object);    
}

console.log(keyList(lesson2));

//Exercício 3

console.log();
console.log('Exercício 3');
console.log();

function objSize(object) {
  return Object.keys(object).length;
}

console.log(objSize(lesson1));

//Exercício 4

console.log();
console.log('Exercício 4');
console.log();

function valueList(object) {
  return Object.values(object);    
}

console.log(valueList(lesson3));

//Exercício 5

console.log();
console.log('Exercício 5');
console.log();

let allLessons = Object.assign({}, lesson1 = {lesson1}, lesson2 = {lesson2}, lesson3 = {lesson3});

console.log(allLessons);
