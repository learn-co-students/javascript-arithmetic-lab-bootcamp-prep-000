function add(a,b) {
  var result;
  result = a + b;
  return result;
}

function subtract(a,b) {
  var result;
  result = a - b;
  return result;
}

function multiply(a,b) {
  var result;
  result = a * b;
  return result;
}

function divide(a,b) {
  var result;
  result = a / b;
  return result;
}

function inc(a) {
  var result;
  result = a += 1;
  return result;
}

function dec(a) {
  var result;
  result = a -= 1;
  return result;
}

function makeInt(string) {
  var n;
  n = parseInt(string,10);
  return n;
}

function preserveDecimal(string) {
  var n;
  n = parseFloat(string);
  return n;
}
