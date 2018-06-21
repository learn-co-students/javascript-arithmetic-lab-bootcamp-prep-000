function add(a,b){
  var number = a + b;
  return number;
}

function subtract(a, b){
  var number = a - b;
  return number;
}

function multiply(a, b){
  var number = (a * b);
  return number;
}

function divide(a, b){
  var number = a / b;
  return number;
}

function inc(n){
  var number = parseInt(n + 1);
  return number;
}

function dec(n){
  var number = --n;
  return number;
}

function makeInt(n){
  var number = parseInt(n, 10);
  return parseInt(number, 10);
}

function preserveDecimal(n){
  var number = parseFloat(n);
  return parseFloat(number);
}
