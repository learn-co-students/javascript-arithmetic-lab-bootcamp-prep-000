var a,b;

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return  a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function inc(a) {
  a++;
  return a;
}

function dec(a) {
  a--;
  return a;
}

function makeInt(a) {
  var n = parseInt(a,10);
  return n;
}

function preserveDecimal(a) {
  return parseFloat(a);
}