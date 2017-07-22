// @flow

import sum from '../sum';

describe('sum', () => {
  test('returns 2 when 1 and 1 is called', () => {
    let result = sum(1, 1);
    let expected = 2;
    expect(result).toBe(expected);
  });

  test('return -2 when -1 and -1 is called', () => {
    let result = sum(-1, -1);
    let expected = -2;
    expect(result).toBe(expected);
  });

  test(`the first argument if the second one is not provided`, () => {
    let result = sum(1);
    let expected = 1;
    expect(result).toBe(expected);
  });

  test(`no argument is provided, returns 0 instead`, () => {
    let result = sum();
    let expected = 0;
    expect(result).toBe(expected);
  });

  test(`it sums three arguments`, () => {
    let result = sum(1, 2, 3);
    let expected = 6;
    expect(result).toBe(expected);
  });

  test(`it sums three arguments`, () => {
    let result = sum(1, 2, 3, 4);
    let expected = 10;
    expect(result).toBe(expected);
  });

  test(`it sums three arguments`, () => {
    let result = sum(1, 2, 3, 4, 5);
    let expected = 15;
    expect(result).toBe(expected);
  });
});
