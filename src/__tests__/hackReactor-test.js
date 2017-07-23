// @flow
import {
  isOldEnoughToDrink,
  isOldEnoughToDrive,
  isOldEnoughToVote,
  addArrayProperty,
  computeCompoundInterest,
  modulo,
  getIndexOf,
} from '../hackReactor';

describe('hackReactor functions', () => {
  test('returns bool of isOldEnoughToDrink', () => {
    const result = isOldEnoughToDrink(20);
    const expected = false;
    expect(result).toBe(expected);
  });
  test('returns bool of isOldEnoughToDrive', () => {
    const result = isOldEnoughToDrive(20);
    const expected = true;
    expect(result).toBe(expected);
  });
  test('returns bool of isOldEnoughToVote', () => {
    const result = isOldEnoughToVote(undefined);
    const expected = false;
    expect(result).toBe(expected);
  });
  test('returns Object of addArrayProperty', () => {
    const myObj = {};
    const myArray = [1, 3];
    const result = addArrayProperty(myObj, 'key', myArray);
    const expected = { key: myArray };
    expect(result).toEqual(expected);
  });
  test('returns decimal of computeCompoundInterest', () => {
    const result = computeCompoundInterest(1500, 0.043, 4, 6);
    const expected = 438.8368221341061;
    expect(result).toBe(expected);
  });
  test('returns expacted number of modulo function test', () => {
    const result = modulo(25, 4);
    const expected = 1;
    expect(result).toBe(expected);
  });
  test('returns NaN number of modulo function test', () => {
    const result = modulo(1, 0);
    const expected = NaN;
    expect(result).toEqual(expected);
  });
  test('returns 0 number of modulo function test', () => {
    const result = modulo(0, 1);
    const expected = 0;
    expect(result).toEqual(expected);
  });
  test('returns 0 number of modulo function test', () => {
    const result = modulo(NaN, 1);
    const expected = NaN;
    expect(result).toEqual(expected);
  });
  test('returns index value from param1 in param2 of getIndexOf function test', () => {
    const result = getIndexOf('m', 'an ambal');
    const expected = 4;
    expect(result).toBe(expected);
  });
});
