var number = 10

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
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
  var parsed = parseInt(n, number);
  return parsed;
}

function preserveDecimal(n) {
  var parsed = parseFloat(n, number);
  return parsed;
}
