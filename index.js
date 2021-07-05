// adds two numbers and returns the result
function add(a, b){
  return a + b;
}

// subtracts b from a and returns the result
function subtract(a, b){
  return a - b;
}

// multiplies a and b and returns the result
function multiply(a, b){
  return a*b;
}

// divivdes a by b and returns the result
function divide(a, b){
  return a / b;
}

// post-increments n and returns result
function inc(n){
  return ++n;
}

// post-decrements n and returns result
function dec(n){
  return --n;
}

// parse n as and integer and returns parse
function makeInt(n){
  return parseInt(n, 10);
}

// preserves decimals and returns parseInt
function preserveDecimal(n){
    return parseFloat(n);
}
