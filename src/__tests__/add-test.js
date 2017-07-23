// const add = require('../add');
// @flow

import add from '../add';

describe('add', () => {
  test('returns 2 when 1 and 1 is called', () => {
    const result = add(1, 1);
    const expected = 2;
    expect(result).toBe(expected);
  });
  test('returns -2 when -1 and -1 is called', () => {
    const result = add(-1, -1);
    const expected = -2;
    expect(result).toBe(expected);
  });
  test('returns x when y is not provided', () => {
    const result = add(1);
    const expected = 1;
    expect(result).toBe(expected);
  });
  test('returns y when x is not provided', () => {
    const result = add(1);
    const expected = 1;
    expect(result).toBe(expected);
  });
  test('no argument provided returns 0', () => {
    const result = add();
    const expected = 0;
    expect(result).toBe(expected);
  });
});
