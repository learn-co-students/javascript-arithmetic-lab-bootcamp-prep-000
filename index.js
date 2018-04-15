var a, b

function add(a, b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b) {
  return a / b
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
  var number = n
  return parseInt(number, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}