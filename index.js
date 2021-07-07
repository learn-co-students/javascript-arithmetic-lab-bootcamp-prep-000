function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
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
  var parsedInteger = parseInt(n,10);
  return parsedInteger;
}

function preserveDecimal(n) {
  var parsedInteger = parseFloat(n);
  return parsedInteger;
}