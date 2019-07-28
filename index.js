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

function inc(a, n) {
  return a + 1
}

function dec(a, n) {
  return a - 1
}

function makeInt(n, b) {
  var parsed = parseInt(n, b)
  return parsed * n
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n, 10)
}