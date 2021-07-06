function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return add(a, -1*b)
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return multiply(a, 1 / b)
}

function inc(a) {
  return a + 1
}

function dec(a) {
  return a - 1
}

function makeInt(a) {
  return parseInt(a, 10)
}

function preserveDecimal(a) {
  return parseFloat(a)
}