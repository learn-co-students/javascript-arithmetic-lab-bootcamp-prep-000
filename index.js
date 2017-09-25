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

var a = 0;
function inc(n) {
  n++;
  return n;
}
a=inc(a);

var a = 0;
function dec(n) {
  n--;
  return n;
}
a=dec(a);

var a = 1;
function makeInt(n) {
  return makeInt(a.toString());
}
