//const add = require('../add');
// @flow

import add from '../add';
describe('add', () => {
  test('returns 2 when 1 and 1 is called', () =>{
    let result = add(1,1);
    let expected = 2;
    expect(result).toBe(expected);
  });
  test('returns -2 when -1 and -1 is called', () => {
    let result = add(-1,-1);
    let expected = -2;
    expect(result).toBe(expected);
  })
  test('returns x when y is not provided', () => {
    let result = add(1);
    let expected = 1;
    expect(result).toBe(expected);
  })
  test('returns y when x is not provided', () => {
    let result = add(1);
    let expected = 1;
    expect(result).toBe(expected);
  })
  test('no argument provided returns 0', () => {
    let result = add();
    let expected = 0;
    expect(result).toBe(expected);
  })
});
