function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
}

function inc(n){
  return n+1;
}

function dec(n){
  return n-1
}

function makeInt(n){
  if(n == NaN){
    return 0
  }
  return parseInt(n,10)
}
function preserveDecimal(n){
  if(n === NaN){
    return 0.0;
  }
  return parseFloat(n)
}
