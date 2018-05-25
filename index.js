var a, b
var res;

function add(a , b) {
  res = a + b;
  return res;
}

function subtract (a , b) {
  res = a - b;
  return res;
}

function multiply(a , b) {
  res = a * b;
  return res;
}

function divide(a,b) {
  res = a / b;
  return res;
}

function inc(a) {
  a += 1;
  return a;
}

function dec(a) {
  a -= 1;
  return a;
}

function makeInt(a) {
  return parseInt(a , 10 );
} 

function preserveDecimal(a) {
  return parseFloat(a);
}
