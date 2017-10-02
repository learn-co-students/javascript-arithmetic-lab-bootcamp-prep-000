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
  return n + 1;
}

function dec(n) {
  return n - 1;
}

function makeInt(n) {
  if (typeof n === 'string') {
    return parseInt(n, 10);
  } else if (typeof n === 'number') {
    return n;
  } else {
    return NaN;
  }
}

function preserveDecimal(n) {
  if (typeof n === 'string') {
    return parseFloat(n);
  } else if (typeof n === 'number') {
    return n;
  } else {
    return NaN;
  }
}
