function add(a, b) {
  var number = a + b
  return number
}

function subtract(a, b) {
  var number = a - b
  return number
}

function multiply(a, b) {
  var number = a * b
  return number
}

function divide(a, b) {
  var number = a / b
  return number
}

function inc(n) {
  var number = n += 1
  return number
}

function dec(n) {
  var number = n -= 1
  return number
}

function makeInt(n) {
  var int = parseInt(n, 10)
  return int
}

function preserveDecimal(n) {
  var int = parseFloat(n)
  return int
}
