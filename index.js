// add(a, b) adds two numbers and returns the result

var number;

function add(a, b) {
  number = a + b;
  return number;
}

// subtract(a, b) subtracts b from a and returns the result

function subtract(a, b) {
  number = a - b;
  return number;
}

// multiply(a, b) multiplies two numbers and returns the result

function multiply(a, b) {
  number = a * b;
  return number;
}

// divide(a, b) divides a by b and returns the result

function divide(a, b) {
  number = a / b;
  return number;
}

// inc(n) increments n and returns the result

function inc(n) {
  number = ++n;
  return number;
}

// dec(n) decrements n and returns the result

function dec(n) {
  number = --n;
  return number;
}

// parses n as an integer and returns the parsed integer
// assumes base 10
// returns NaN as appropriate

function makeInt(n) {
  number = parseInt(n, 10);
  return number;
}

// preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number
//returns NaN as appropriate

function preserveDecimal(n) {
  number = parseFloat(n, 10);
  return number;
}