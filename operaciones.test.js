

const { sumar, restar, multiplicar, dividir, modulo } = require('./operaciones');

test('Sumar dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Restar dos números', () => {
  expect(restar(5, 2)).toBe(3);
});

test('Multiplicar dos números', () => {
  expect(multiplicar(4, 6)).toBe(24);
});

test('Dividir dos números', () => {
  expect(dividir(8, 2)).toBe(4);
});

test('Módulo de dos números', () => {
  expect(modulo(7, 3)).toBe(1);
});
