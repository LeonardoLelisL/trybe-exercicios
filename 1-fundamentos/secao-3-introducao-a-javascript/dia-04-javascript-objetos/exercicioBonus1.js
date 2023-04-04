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

let allLessons = Object.assign({}, lessonA = {lesson1}, lessonB = {lesson2}, lessonC = {lesson3});

console.log(allLessons);

//Exercício 6

console.log();
console.log('Exercício 6');
console.log();

function numberOfStudents(object) {
  let students = 0;
  for (let key in object) {
    students += object[key].numeroEstudantes;
  }
  return students;
}

console.log(numberOfStudents(allLessons));

//Exercício 7

console.log();
console.log('Exercício 7');
console.log();

function getValueByNumber(object, number) {
  return Object.values(object)[number];
}

console.log(getValueByNumber(lesson1, 0));

//Exercício 8

console.log();
console.log('Exercício 8');
console.log();

function verifyPair(object, key, value) {
  for (let key1 in object) {
    if (key1 === key){
      return object[key1] === value;
    }
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
