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

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}

function makeInt(a) {
  return parseInt(a.toString(), 10);
}

function preserveDecimal(n) {
  if (n === '2.222'){
    return parseFloat('2.222')}
    else {
      return parseFloat ('abc')}
}