var number = 5

function add(a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function divide(a,b) {
  return a / b
}

function multiply(a,b) {
  return a * b
}

function inc(n) {
  var number = n
  number += 1
  return number
}

function dec(n) {
  var number = n
  number -= 1
  return number
}

function makeInt(n) {
  return parseInt (n,10)
}

function preserveDecimal(n) {
  return parseFloat (n)
}
