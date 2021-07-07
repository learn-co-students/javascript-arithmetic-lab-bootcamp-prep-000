function add(a,b) {
  return a + b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n){
  var q = parseInt(n,[10]);
  return q;
}

function preserveDecimal(n){
  var m = parseFloat(n);
  return m;
}
