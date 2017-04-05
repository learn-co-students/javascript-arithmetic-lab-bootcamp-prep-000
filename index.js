function add(a,b) {
  var result = a+b ;
  return(result);
}

function subtract(a,b) {
  var result = a-b ;
  return(result);
}

function multiply(a,b) {
  var result = a*b ;
  return(result);
}

function divide(a,b) {
   a/= b ;
  return(a);
}

function inc(n) {
  n += 1;
  return(n);
}

function dec(n) {
  n -= 1;
  return(n);
}

function makeInt(n){
  return parseInt(n,10)
}

function preserveDecimal(n){
  return parseFloat(n)
}