function add(a, b) {
  var addition = a + b;
  return addition;
}
function subtract(a, b) {
  var subtraction = a - b;
  return subtraction;
}

function multiply(a, b) {
  var multiplication = a * b;
  return multiplication;
}

function divide(a, b) {
  var division = a / b;
  return division;
}

function inc(n) {
  var result = n += 1;
  return result;

}

function dec(n) {
  var deinc = n -= 1;
  return deinc;
}

function makeInt(n) {
 var parsed = parseInt(n, 10);
 return parsed;
}

function preserveDecimal(n) {
  var pdec = parseFloat(n);
  return pdec;
}