function add(a,b) {
  return a + b;
}


function subtract(b, a) {
  return (b -= a) ;
}

function multiply(a, b) {
  return a * b;
}
function divide (a, b) {
  return a /= b;
}
var n = 9;
function inc (n) {
  n = ++n;
  return n;
}
function dec (n) {
  n = --n ;
  return n;
}

function makeInt (n) {
  n = parseInt (n, 10)
  return n;
}
function preserveDecimal(n) {
  n = parseFloat(n);
  return n;
}
