function add(a, b) {
  return(a + b);
}

function subtract(a, b) {
  return(a - b);
}

function multiply(a, b) {
  return(a * b);
}

function divide(a, b) {
  return(a / b);
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