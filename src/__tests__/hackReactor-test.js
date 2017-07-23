// @flow
import {
  isOldEnoughToDrink,
  isOldEnoughToDrive,
  isOldEnoughToVote,
  addArrayProperty,
  computeCompoundInterest,
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
    const result = isOldEnoughToVote();
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
});
