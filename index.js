var result;
function add (a, b){
  result = a + b;
  return result;
}

function subtract (a, b){
  result = a - b; 
  return result;
}

function multiply (a, b){
  result = a * b;
  return result;
}

function divide (a, b){
  result = a/b;
  return result;
}

function inc(n){
  result = n + 1;
  return result;
}

function dec(n){
  result = n - 1;
  return result;
}

function makeInt(n){
  result = parseInt(n, 10);
  return result;
}

function preserveDecimal(n){
  result = parseFloat(n, 10);
  return result;
}