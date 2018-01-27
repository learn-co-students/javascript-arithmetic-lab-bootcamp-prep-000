// Basic math functions

function add(a, b) {
  return (a + b)
}
function subtract(a, b) {
  return (a - b)
}
function multiply(a, b) {
  return (a * b)
}
function divide(a, b) {
  return (a / b)
}

// Adding and subtracting by 1

function inc(n) {
  return (n + 1)
}
function dec(n) {
  return (n - 1)
}

// Integer function

function makeInt(n) {
  return (parseInt(n, 10))
}

// Decimal preservation

function preserveDecimal(n) {
  n = parseFloat(n)
  return (n)
}
