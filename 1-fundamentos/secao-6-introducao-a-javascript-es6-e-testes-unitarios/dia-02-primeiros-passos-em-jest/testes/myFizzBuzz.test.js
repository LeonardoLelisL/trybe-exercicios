const myFizzBuzz = require('../myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('verifica se o parâmetro recebido é um número, caso seja, verifica se é divisível por 3 e/ou 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('a')).toBe(false);
  })
})