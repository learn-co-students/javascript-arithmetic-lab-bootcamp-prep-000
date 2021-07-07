var number
function add(a, b) {
  number = a + b;
  return number;
}

function subtract(a, b) {
  number = a - b;
  return number;
}

function multiply(a, b) {
  number = a * b;
  return number;
}

function divide(a, b) {
  number = a / b;
  return number;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n) {
  parseInt(n, 10); 
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  parseFloat(n);
  return parseFloat(n);
}