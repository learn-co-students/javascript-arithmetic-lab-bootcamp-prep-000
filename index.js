var a = 656
var b = 378
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
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  return parseInt(n)
}


function makeInt(n) {
  return parseInt(n, 10)
}

function makeIntNaN(n) {
  return parseInt('nope!')
}

function preserveDecimal(n) {
  return parseFloat(n)
}

function preserveDecimalNan(n) { //works
  return parseFloat('nope!')
}
