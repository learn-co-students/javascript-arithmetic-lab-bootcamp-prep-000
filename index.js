function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
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
  var parsed = parseInt(n, 10);
  return parsed;
}

function preserveDecimal(n) {
  var parsed = parseFloat(n, 10);
  return parsed;
}
