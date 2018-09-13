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

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}

function makeInt(a) {
  return parseInt(a);
}

var n = 10;

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal() {
  return parseFloat('2.222');
}

var n = 'asdfdsa';

function preserveDecimal(n) {
  return parseFloat(n);
}