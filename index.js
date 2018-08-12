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
  var x = 1 
  return x += n 
}

function dec(n) {
  var x = 1 
  return n -= 1 
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}