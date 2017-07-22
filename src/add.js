// @flow

function add(x: number, y?: number): number{
  //TODO: do something here
  if (typeof x ==='undefined' && typeof y ==='undefined')
  {
    return 0;
  }
  else if(typeof y === 'undefined')
  {
    return x;
  }
  return x+y;
}

export default add;
