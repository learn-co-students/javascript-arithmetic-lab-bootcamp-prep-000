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
  return a / b;
}

function inc(a) {
  return ++a;
}

function dec(a) {
  return --a;
}
function makeInt(a) {
  var num = parseInt(a, 10);
  if(num == NaN)
    return true;
  return num;
}

function preserveDecimal(a) {
  var num = parseFloat(a);
  if(num == NaN)
    return true;
  return num;
}
