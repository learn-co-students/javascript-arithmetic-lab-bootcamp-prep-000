function add(a, b) {
  var result = a + b;
  return result;
}

function subtract(a, b) {
  var result = a - b;
  return result;
}

function multiply(a, b) {
  var result = a * b;
  return result;
}

function divide(a, b) {
  var result = a / b;
  return result;
}

function inc(n) {
  n += 1;
  return n;
}
function dec(n) {
  n -= 1;
  return n;
}

function makeInt(n) {
  n = parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  n = parseFloat(n);
  return n;
}