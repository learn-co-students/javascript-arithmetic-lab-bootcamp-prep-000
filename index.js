function add(a, b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
    if(isNaN(parseInt(n,10))){
      console.log('Hey I happened!')
      return NaN;
    }
    else {
      console.log('Hey no I happened!')
      return parseInt(n,10);
    }
}

function preserveDecimal(n) {
  if(isNaN(parseFloat(n))) {
    return NaN;
  }
  else {
    return parseFloat(n);
  }
}
