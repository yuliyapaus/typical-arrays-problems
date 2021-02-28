
exports.min = function min (array) {
  if (array===undefined || !array || array.length===0) {return 0}
  return Math.min(...array);
}

exports.max = function max (array) {
  if (array===undefined || !array || array.length===0) {return 0}
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array===undefined || !array || array.length===0) {return 0};
  let total = 0;
  array.map(function (i) {total += +i})
  return total/array.length;
}
