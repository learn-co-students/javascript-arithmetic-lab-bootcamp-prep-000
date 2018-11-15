function add(a, b) {
  var number = a + b;
  return number
}

function subtract(a, b) {
  var number = a-b;
  return number;
}

function multiply(a, b) {
  var number = a*b;
  return number;
}

function divide(a,b) {
  var number = a/b;
  return number;
}

function inc(n) {
  var number = n;
  number++
  return number;
}

function dec(n) {
  var number = n;
  number--;
  return number;
}

function makeInt(n) {
  return parseInt(n,10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}