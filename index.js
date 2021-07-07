var a;
var b;

function forEach() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
}

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
  return a/b;
}

function inc(n) {
  n++
  return n;
}

function dec(n) {
  n--
  return n;
}

function makeInt(n) {
  return parseInt(n.toString(), 10);
}

function preserveDecimal(n) {
  if(n === undefined) {
    return NaN;
  }
  return parseFloat(n);
}

/* ide not working correctly?? */
