function add(a, b) {
  var x = a + b;
  return x;
  }

function subtract(a, b) {
  var x = a - b;
  return x;
}

function multiply(a, b) {
  var x = a * b;
  return x;
}

function divide(a, b) {
  var x = a / b;
  return x;
}

function inc(n) {
  var x = n += 1;
  return x;
}

function dec(n) {
  var x = n -= 1;
  return x;
}

function makeInt(n) {
  var x = parseInt(n, 10);
  return x;
}

function preserveDecimal(n){
  var x = parseFloat(n, 10);
  return x;
}
