function add(a, b) {
  a + b
  return a+b;
}

function subtract(a, b) {
  a - b
  return a-b;
}

function multiply(a, b) {
  a * b
  return a*b;
}

function divide(a, b) {
  a / b
  return a/b;
}

var n = 9
function inc(n) {
  n++
  return n++;
}

var n = 9
function dec(n) {
  n--
  return n--;
}

function makeInt(n, base) {
  var parsed = parseInt (n, 10);
  if (isNaN(parsed)) { return NaN}
  return parsed;
}

function preserveDecimal(n) {
  return parseFloat(n);
}