// @flow

function sum(...numbers: Array<number>): number {
  let summed = 0;
  for (let arg = 0; arg < numbers.length; arg += 1) {
    summed += numbers[arg];
  }
  return summed;
}

export default sum;
