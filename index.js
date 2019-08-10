// basic math
function add(a, b) {
  var add = (a + b)
  return add
}

function subtract(a, b) {
  var subtract = (a - b)
  return subtract
}

function multiply(a, b) {
  var multiply = (a * b)
  return multiply
}

function divide(a, b) {
  var divide = (a / b)
  return divide
}

// math + assignment
function inc(n) {
  var n = (n += 1)
  return n
}

function dec(n) {
  var n = (n -= 1)
  return n
}

// parsing numbers
function makeInt(n) {
  var n = parseInt(n, 10)
  return n
}

function preserveDecimal(n) {
  var n = parseFloat(n)
  return n
}