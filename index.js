// add two numbers and return the result
function add(a, b) {
  return a + b;
}

// subtract b from a and return the result
function subtract(a, b) {
  return a - b;
}

// multiply two numbers and return the result
function multiply(a, b) {
  return a * b;
}

// divide a by b and return the result
function divide(a, b) {
  return a / b;
}

// increments n and returns the result:
function inc(n) {
  return n += 1;
}

// decrements n and returns the result
function dec(n) {
  return n -= 1;
}

// parses n as an integer and returns the parsed integer
function makeInt(n) {
  return parseInt(n);
}

// parses n as an integer and returns the parsed integer (assumes base 10)
function makeInt(n) {
  return parseInt(n, 10);
}

// preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
  return parseFloat(n);
}

// preserves n's decimals (it parses n as a floating point number) and returns NaN as appropriate
function preserveDecimal(n) {
  return parseFloat(n, 10);
}
