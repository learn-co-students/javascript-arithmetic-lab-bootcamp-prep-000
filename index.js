function add(a, b) {
  var answer = a + b
  return answer
}
function subtract(a, b) {
  var answer = a - b
  return answer
}
function multiply(a, b) {
  var answer = a * b
  return answer
}
function divide(a, b) {
  var answer = a/b
  return answer
}
function inc(n) {
  n++
  return n
}
function dec(n) {
  n--
  return n
}
function makeInt(n) {
  if (parseFloat(n, 10) === NaN) {
    return NaN
  } else
  return parseInt(n, 10)
}
function preserveDecimal(n) {
  return parseFloat(n, 10)
}
