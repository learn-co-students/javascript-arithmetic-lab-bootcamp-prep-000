function add(x, y){
  var z = x + y;
    return z;
}

function subtract(x, y){
  var z = x - y;
    return z;
}

function multiply(x, y){
  var z = x * y;
    return z;
}

function divide(x, y){
  var z = x / y;
    return z;
}

function dec(n){
  var a = n;
    return a -+ 1;
}

function inc(n){
  var a = n;
    return a += 1;
}

function makeInt(n){
  parseInt(n);
    return n;
}

function makeInt(n){
  parseInt(n, 10);
    return parseInt(n, 10);
}

function preserveDecimal(n){
  parseFloat(n);
    return parseFloat(n);
}
