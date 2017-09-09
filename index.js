function add(a,b) {
  var result = a + b;
  return result;
}

function subtract(a,b) {
  var result = a - b;
  return result;
}

function multiply(a,b) {
  var result = a * b;
  return result;
}

function divide(a,b) {
  var result = a / b;
  return result;
}

function inc(n) {
  var result = n += 1
  return result;
}

function dec(n) {
  var result = n -= 1;
  return result;
}

function makeInt(n) {
  var result = parseInt(n,10);
  return result;
}

function preserveDecimal(n) {
  var result = parseFloat(n);
  return result;
}
