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
  if (isNaN(n) === true) {
    return Boolean;
  } else if (typeof n === typeof 'numbers') {
    return parseInt(n, 10);
  }
}

function preserveDecimal(n) {
  if (isNaN(n) === true) {
    return Boolean;
  } else {
    return parseFloat(n);
  }
}
