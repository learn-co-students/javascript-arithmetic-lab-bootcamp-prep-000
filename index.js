function add(a, b) {
  var addResult = a += b;
  return addResult;
}

function subtract(a, b) {
  var subResult = a -= b;
  return subResult;
}

function multiply(a, b) {
  var multResult = a *= b;
  return multResult;
}

function divide(a, b) {
  var divResult = a /= b;
  return divResult;
}

function inc(n) {
  var plusOne = ++n;
  return plusOne;
}

function dec(n) {
  var minusOne = --n;
  return minusOne;
}

function makeInt(n) {
  return parseInt(n, 10);
  //var intNum = parseInt('n', 10);
  //return intNum;
}

function preserveDecimal(n) {
var floatNum = parseFloat(n);
return floatNum;
}
