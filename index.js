function add(a,b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function increment(n){
  var num = n;
  num++
  return num;
}

function decrement(n){
  var num = n;
  num--;
  return num;
}

function makeInt(n){
  var parsed = parseInt(n, 10);
  return parsed;
}

function preserveDecimal(n){
  var parsedF = parseFloat(n);
  return parsedF;
}