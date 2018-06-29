function add (a,b, result){
  result = a + b;
  return result;
}

function subtract (a,b, result){
  result = a - b;
  return result;
}

function multiply (a,b, result){
  result = a * b;
  return result;
}

function divide (a,b, result){
  result = a / b;
  return result;
}

function inc (n){
  return n +=1;
}

function dec(n){
  return n -=1;
}

function makeInt(n){
  n = parseInt(n, 10);
  return n;
}

function preserveDecimal (n){
  n = parseFloat (n);
  return n
}