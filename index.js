function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x, y){
  return x / y;
}

function increment(n){
  return ++n;
}

function decrement(n){
  return --n;
}

function makeInt(n){
  var int = parseInt(n, 10);
  if(int.isNaN)
    return NaN;
  else
    return int;
}

function preserveDecimal(n){
  var float = parseFloat(n);
  if(float.isNaN)
    return NaN;
  else
    return float;
}