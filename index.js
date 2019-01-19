

function add(a, b){
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  return ++n;
}

function dec(n){
  return --n;
}

function makeInt(n){
  var parse = parseInt(n, 10);
  return parse;
}

function preserveDecimal(n){
  var preserved = parseFloat(n);
  return preserved;
}