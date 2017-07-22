// @flow
export default sum;

function sum(...numbers?: Array<number>):number{
  let summed = 0;
  for(let arg=0; arg < numbers.length; arg++){
    summed += numbers[arg];
  }
  return summed;
}
