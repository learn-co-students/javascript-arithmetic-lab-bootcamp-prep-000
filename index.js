function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function inc(num){
  return num += 1;
}

function dec(n){
  return n -= 1;
}

function makeInt(num){
  return parseInt(num, 10);
}

function preserveDecimal(num){
  if (num == NaN){
    return true;
  }
  else{
    return num ;
  }
}
