module.exports = function towelSort (matrix) {
  if(arguments.length === 0) {
    return []
  }
  let result = [];
  matrix.forEach((element, index) => {
    if(index%2 === 0) {
      result = [...result, ...element]
    }
    else {
      let reversElem = element.reverse();
      result = [...result, ...reversElem]
    }
  });
  return result;
}
