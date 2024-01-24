
const sum = require('../src/sum');

describe('sum()', () => {
  test('sumar 1 + 2 es igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum('r'+2)).toBe(0);
    expect(sum(undefined + 2)).not.toBe(NaN);
  });

});