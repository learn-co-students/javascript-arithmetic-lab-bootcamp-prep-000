function add(a, b) {
  return(a + b); // adds a and b
}

function subtract(a, b) {
  return(a - b); // subtracts b from a
}

function multiply(a, b) {
  return(a * b); // multiplies a by b
}

function divide(a, b) {
  return(a / b); // divides a by b
}

function inc(n) {
  return(n += 1); // increments n by 1
}

function dec(n) {
  return(n -= 1); // decreases n by 1
}

function makeInt(n) {
  return parseInt(n, 10); // returns n as whole number
}

function preserveDecimal(n) {
  return parseFloat(n, 10); // returns argument perserving decimal
}