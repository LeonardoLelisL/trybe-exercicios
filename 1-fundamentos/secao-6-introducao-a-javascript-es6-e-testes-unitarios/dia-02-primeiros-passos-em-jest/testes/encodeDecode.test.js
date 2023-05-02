const { encode, decode } = require('../encodeDecode');

describe('testa as funções encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toBe('function');
  })
  it('decode é uma função', () => {
    expect(typeof decode).toBe('function');
  })
  it('a função encode coverte vogais a, e, i, o, u em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeioubcd')).toBe('12345bcd');
  })
  it('a função decode coverte os números 1, 2, 3, 4 e 5 nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345678')).toBe('aeiou678');
  })
  it('o retorno da função encode tem o mesmo número de caracteres que o parâmetro', () => {
    expect(encode('trybe').length).toBe(5);
  })
  it('o retorno da função decode tem o mesmo número de caracteres que o parâmetro', () => {
    expect(decode('trybe').length).toBe(5);
  })
})