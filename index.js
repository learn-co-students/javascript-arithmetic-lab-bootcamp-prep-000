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
  if (b === 0)
    return 0
  else
    return a / b
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
