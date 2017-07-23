// @flow

import sum from '../sum';

describe('sum', () => {
  test('returns 2 when 1 and 1 is called', () => {
    const result = sum(1, 1);
    const expected = 2;
    expect(result).toBe(expected);
  });

  test('return -2 when -1 and -1 is called', () => {
    const result = sum(-1, -1);
    const expected = -2;
    expect(result).toBe(expected);
  });

  test('the first argument if the second one is not provided', () => {
    const result = sum(1);
    const expected = 1;
    expect(result).toBe(expected);
  });

  test('no argument is provided, returns 0 instead', () => {
    const result = sum();
    const expected = 0;
    expect(result).toBe(expected);
  });

  test('it sums three arguments', () => {
    const result = sum(1, 2, 3);
    const expected = 6;
    expect(result).toBe(expected);
  });

  test('it sums three arguments', () => {
    const result = sum(1, 2, 3, 4);
    const expected = 10;
    expect(result).toBe(expected);
  });

  test('it sums three arguments', () => {
    const result = sum(1, 2, 3, 4, 5);
    const expected = 15;
    expect(result).toBe(expected);
  });
});
