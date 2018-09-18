var a = 3;
a = 3;
var b = 4;
b = 4;

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

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}