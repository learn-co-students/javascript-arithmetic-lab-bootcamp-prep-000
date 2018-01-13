var a, b
var number
function add(a, b) { //this works with var number defined.
  number = a + b
  return number
}

function subtract(a, b) { // var a,b defined passes too. which right?
  return (a - b)
}

function multiply(a, b) {
  return (a * b)
}

function divide(a, b) {
  return (a / b)
}

function inc(a) {
  return (a += 1)
}

function dec(a) {
  return (a -= 1)
}

function makeInt(a) {
  return parseInt(a, 10);
}

function preserveDecimal(a) {
  return parseFloat(a);
}
