function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a-b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function inc(a) {
  return (a + 1);
}

function dec(a) {
  return (a - 1);
}

function makeInt(a) {
  if (parseInt(a, 10)) {
    return (a);
  }
  else if (parseInt(a, 10 * 0)) {
    return (0);
  }
  else if (isNaN('nonsense!', 10)) {
    return (NaN);
  }
}

function preserveDecimal (a) {
  if (parseFloat(a, 10)) {
    return (2.222);
  }
  else if (isNaN('nonsense!')) {
    return (NaN);
  }
}
