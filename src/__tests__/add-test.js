const add = require('../add');

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
});
