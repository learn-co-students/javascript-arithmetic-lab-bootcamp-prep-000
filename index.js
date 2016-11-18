var a,b

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function inc(n) {
   return ++n;
  }

function dec(n) {
     return --n;
    }

function makeInt(n) {
  if(n, 10)
    return parseInt(n, 10);
  return NaN;
}


function preserveDecimal(n){
  if(n)
    return parseFloat(n)
  return NaN;
}
