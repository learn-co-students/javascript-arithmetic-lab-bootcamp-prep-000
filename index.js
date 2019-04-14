var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add(a,b){
  var sum = a+b;
  return sum;
}

function subtract(a,b){
  var difference = a-b;
  return difference;
}

function multiply(a,b){
  var product = a*b;
  return product;
}

function divide(a,b){
  var quotient = a/b;
  return quotient;
}

function inc(a){
  var sum = a+1;
  return sum;
}

function dec(a){
  var difference = a-1;
  return difference;
}

function makeInt(n){
  return parseInt(n,10);
}

function preserveDecimal(n){
  return parseFloat(n);
}

