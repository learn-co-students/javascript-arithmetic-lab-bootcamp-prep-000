// add(a, b) adds two numbers and returns the result:

function add(a, b) {
  return a + b;
}

// subtract(a, b) subtracts b from a and returns the result:


function subtract(a, b) {
  return a - b;
}

// multiply(a, b) multiplies two numbers and returns the result:

function multiply(a, b) {
  return a * b;
}

// divide(a, b) divides a by b and returns the result:

function divide(a, b) {
  return a/b;
}

// inc(n) increments n and returns the result:

function inc(n) {
  return ++n;
}

// dec(n) decrements n and returns the result:

function dec(n) {
  return --n;
}

// makeInt(n) parses n as an integer and returns the parsed integer:

function makeInt(n) {
  return parseInt(n, 10);
}

// makeInt(n) assumes base 10:

//  makeInt(n) returns NaN as appropriate:

// 10) preserveDecimal(n) preserves n's decimals (it parses n as a floating point number) and returns the parsed number:

// preserveDecimal(n) returns NaN as appropriate:


function preserveDecimal(n) {
  return parseFloat(n);
}