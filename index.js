function add(a,b) {
    var addResult = a + b;
    return addResult;
}

function subtract(a,b) {
  var subtractResult = a - b;
  return subtractResult;
}

function multiply(a, b) {
  var multiplyResult = a * b;
  return multiplyResult;
}

function divide(a, b) {
  var divideResult = a / b;
  return divideResult;
}

function inc(n) {
  var incResult = n++;
  return n;
}

function dec(n) {
  var decResult = n--;
  return n;
}

function makeInt(n) {
  var parseResult = parseInt(n, 10);
  return parseResult;
}

function preserveDecimal(n) {
  var floatResult = parseFloat(n);
  return floatResult;
}
