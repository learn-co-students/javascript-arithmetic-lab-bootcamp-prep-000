//add (a,b) = a + //

function add(a, b) {
  return a + b;
}

//subtract(a, b) subtracts b from a and returns the result:

function subtract(a, b) {
  return a - b;
}

//multiply(a, b) --> a * b

function multiply(a, b) {
  return a * b;
}

//divide(a, b) -> a/b

function divide(a, b) {
  return a / b;
}

// inc(n) incremeents n and returns the results

function inc(n) {
  n += 1;
  return n;
}

//dec(n) decrements n by 1

function dec(n) {
  n -= 1;
  return n;
}

// makeInt(n) returns NaN when appropriate

function makeInt(n) {
  return parseInt(n, 10);
}

// preserveDecimal(n) preserves n's decimals, and returns NaN when appropriate

function preserveDecimal(n) {
return parseFloat(n);
}
