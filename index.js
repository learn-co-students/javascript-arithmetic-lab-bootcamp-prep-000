function add(a,b){
  var number = a+=b;
  return number;
}

function subtract(a,b){
  var number = a-b;
  return number;
}

function multiply(a,b){
  var number = a*b;
  return number;
}

function divide(a,b){
  var number = a/b;
  return number;
}

function inc(a){
  var number = ++a;
  return number;
}

function dec(a){
  var number = --a;
  return number;
}

function makeInt(a){
  var number = parseInt(a, 10);
  return number;
}

function preserveDecimal(a){
  var number = parseFloat(a);
  return number;
}