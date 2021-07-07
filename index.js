function add(a, b) {
  var z = a + b;
  return z;
}

function subtract(a, b) {
  var z = a - b;
   return z;
}

function multiply(a, b) {
  var z = a * b;
   return z;
}

function divide(a, b) {
  var z = a / b;
   return z;
}

function inc(n) {
  n++;
  var z = n++;
  return z;
} 

function dec(n) {
  n--;
  var z = n--;
  return z;
}

function makeInt(n) {
  var z = parseInt(n, 10);
  return z;
}

function preserveDecimal(n) {
  var z = parseFloat(n);
  return z;
}
