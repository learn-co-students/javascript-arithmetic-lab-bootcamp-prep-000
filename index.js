function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function inc(n) {
  n++
  var a = n
  return a
}
function dec(n) {
  n--
  var a = n
  return a
}
function makeInt(n, base) {
  base = 10
  var parsed = parseInt(n, base)
  if (isNaN(parsed)) {
    return parsed
  }
    return parsed
  }
function preserveDecimal(n) {
  if (isNaN(n)) {
    return "appropriate"
  }
  return parseFloat(n)
}
