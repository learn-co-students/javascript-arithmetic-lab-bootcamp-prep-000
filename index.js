
var number;

function add(a, b) {
  console.log (a, b);
  return a + b;
}

function subtract(a, b) {
  console.log(subtract);
  return a - b;
}

function multiply(a, b) {
  console.log(multiply);
  return a*b;
}

function divide(a, b) {
  console.log(divide);
  return a/b;
}

function inc(n) {
  console.log(inc);
  parseInt(n + 1);
  return n + 1;
}

function dec(n) {
  console.log(dec);
  parseFloat(n - 1);
  return n - 1;
}

function makeInt(n) {
  console.log(makeInt);
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  console.log(preserveDecimal);
  return parseFloat(n, NaN);
}
