function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function inc(n){
  return ++n;
}

function dec(n){
  return --n;
}

function makeInt(n){
  var newInt = parseInt(n, 10);
  if(!isNaN(newInt)){
    return newInt;
  } else {
    return NaN;
  }
}

function preserveDecimal(n){
  var newFloat = parseFloat(n);
  if(!isNaN(newFloat)){
    return newFloat;
  } else {
    return NaN;
  }
}
