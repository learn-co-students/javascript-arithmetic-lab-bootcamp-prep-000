// a = 2; b = 3;

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
  a = parseInt(a, 10);
  return a;
}
function preserveDecimal(a) {
  a = parseFloat(a);
  return a;
}