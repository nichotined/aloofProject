// @flow

function isEmpty(param: mixed): boolean {
  const getParamType = typeof param;
  if (isNaN(param) && getParamType !== 'object') {
    return false;
  } else if (param === null) {
    return false;
  } else if (getParamType === 'string' || getParamType === 'boolean' || getParamType === 'number') {
    console.log(getParamType);
    if (param === 0) {
      return false;
    } else if (param === false) {
      console.log('if bool');
      return false;
    } else if (param === ' ') {
      console.log('if whitspace');
      return false;
    }
  } else if (getParamType === 'object') {
    if (Array.isArray(param) /* true*/ && param[0] === '') {
      console.log('if empty array with empty string', param);
      return false;
    } else if (
      Array.isArray(param) /* true*/ &&
      Array.isArray(param[0]) &&
      param[0][0] === undefined
    ) {
      console.log('if nested empty array', param);
      return false;
    } else if (Object.is(param, param) && Object.values(param).length !== 0) {
      return false;
    }
  }
  // if type not defined by above code
  console.log('true ', param);
  return true;
}

export default isEmpty;
