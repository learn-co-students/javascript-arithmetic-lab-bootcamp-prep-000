function add(a,b){
  return makeInt(a) + makeInt(b);
}

function subtract(a,b){
  return makeInt(a) - makeInt(b);
}

function multiply(a,b){
  return makeInt(a) * makeInt(b);
}

function divide(a,b){
  return makeInt(a) / makeInt(b);
}

function inc(n){
  var n=makeInt(n);
  n++;
  return n;
}

function dec(n){
  var n= makeInt(n);
  n--;
  return n;
}

function makeInt(n){
  return parseInt(n,10);
}

function preserveDecimal(n){
  return parseFloat(n);
}
