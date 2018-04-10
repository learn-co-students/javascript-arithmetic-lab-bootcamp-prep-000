function add(a, b) {
  return (a + b)
}

function subtract(a, b) {
  return (a-b)
}

function multiply(a, b) {
  return a*b
}

function divide(a, b) {
  return a/b
}

function inc(n) {
  return n+1
}

function dec(n) {
  return n-1
}

function makeInt(x) {
   var parsed = parseInt(x, 10);
  if (isNaN(parsed)) { return NaN }
  return parsed;
}

function preserveDecimal(x) {
  var parsed = parseFloat(x);
  if (isNaN(parsed)) { return NaN }
  return parsed;
}