// @flow

function isEmpty(param: mixed): boolean {
  const getParamType: string = typeof param;
  if (isNaN(param) && getParamType !== 'object') {
    return false;
  } else if (param === null) {
    return false;
  }
  switch (getParamType) {
    case 'string':
      if (param === ' ') return false;
      break;
    case 'boolean':
      if (param === false) return false;
      break;
    case 'number':
      if (param === 0) return false;
      break;
    case 'object':
      if (Array.isArray(param) && param[0] === '') {
        return false;
      } else if (Array.isArray(param) && Array.isArray(param[0]) && param[0][0] === undefined) {
        return false;
      } else if (Object.is(param, param) && Object.values(param).length !== 0) {
        return false;
      }
      break;
    default:
      break;
  }
  return true;
}

export default isEmpty;
