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
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

function makeInt(n, base) {
  base = 10;
  return parseInt(n, base);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
