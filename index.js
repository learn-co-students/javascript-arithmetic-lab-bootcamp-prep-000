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
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n) {
  if (n.isNaN) {
    return Nan;
  }
    else {
      return parseInt(n);
    }
}

function preserveDecimal(n) {
  if (n.isNaN) {
    return Nan;
  }
    else {
      return parseFloat(n);
    }
}
