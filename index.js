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
  n += 1;
  return n;
}

function dec(a){
  a -= 1;
  return a;
}

function makeInt(n){
  if (parseInt(n, 10) === NaN){
    return NaN;
  } else {
      return parseInt(n, 10);
  }
}

function preserveDecimal(n){
  if (parseFloat(n) === NaN){
    return NaN;
  } else {
      return parseFloat(n);
  }
}
