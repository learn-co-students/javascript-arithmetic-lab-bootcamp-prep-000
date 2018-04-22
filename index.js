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

function makeInt(n) {
  n = parseInt(n, 10);
  if (n%1 === 0) {
    return n;
  } else {
    return NaN;
  }
}

function preserveDecimal(n) {
  n = parseFloat(n);
  if (n%1 >= 0) {
    return n;
  } else {
    return NaN;
  }
}