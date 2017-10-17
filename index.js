function add(a,b) {
  return a + b
}
function subtract(a,b) {
  return a - b
}
function multiply(a,b) {
  return a * b
}
function divide(a,b) {
  return a/b
}
function inc(a) {
  return a += 1
}
function dec(a) {
  return a -= 1
}

function makeInt(n) {
n = parseInt(n, 10)
  return n
}

var filterFloat = function(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}
function preserveDecimal(n) {
  return filterFloat(n)
}
