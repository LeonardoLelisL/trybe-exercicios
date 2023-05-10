const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// const expectedResult = 20;
const letterNames = names.join('').toLowerCase().split('');
const countA = () => letterNames.reduce((totalLetterA, letter) =>
  letter === 'a' ? totalLetterA += 1 : totalLetterA, 0);
console.log(countA());