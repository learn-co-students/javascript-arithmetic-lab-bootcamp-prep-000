function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function inc(n) {
  var res = parseInt(n);
  return ++res;
}

function dec(n) {
  var res = parseInt(n);
  return --res;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}