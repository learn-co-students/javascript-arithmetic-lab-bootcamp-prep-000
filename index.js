function add(a,b){
 return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function increment(n) {
  n++;
  return n;
}

function decrement(n) {
  n--;
  return n;
}

function makeInt(n) {
  var newN = parseInt(n, 10);
  return newN;
}

function preserveDecimal(n) {
  return parseFloat(n);
}