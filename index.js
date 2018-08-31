function add(a, b){
 var c = a += b;
  return (c);
}

function subtract(a,b){
  var c = a-=b;
  return (c);
}
function multiply(a,b){
  var c = a*=b;
  return (c);
}

function divide(a,b){
  var c = a/=b;
  return(c);
}

function inc(n){
  n++;
  return (n);
}

function dec(n){
  n--;
  return(n);
}

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}

