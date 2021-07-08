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