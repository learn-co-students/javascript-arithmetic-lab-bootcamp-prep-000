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
  return a/b;
}

function inc(n){
  return n+1;
}

function dec(n){
  return n-1;
}

function makeInt(n){
  var result = parseInt(n,10);
  if (result === NaN){
    return NaN;
  }
  else{
    return result;
  } 
}

function preserveDecimal(n){
  var result = parseFloat(n);
  if(result === NaN){
    return NaN;
  }
  else{
    return result;
  }
}
