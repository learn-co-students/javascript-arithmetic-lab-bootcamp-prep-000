var notInteger = parseInt('non-sense', 10);

var floatConverter = parseFloat('2.2222');


function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function inc(n){
  return ++n;
}

function dec(n){
  return --n;
}

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}
