function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  var result =  ++n;
  return result;
}

function dec(n) {
  var result = --n;
  return result;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return  parseFloat(n);
}
