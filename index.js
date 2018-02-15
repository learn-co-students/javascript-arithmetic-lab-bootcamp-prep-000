//adds two numbers and returns the result
function add(a, b) {
  return a + b;
}

//subtracts b from a and returns the results
function subtract(a, b) {
  return a - b;
}

//multiplies two numbers and returns the result
function multiply(a, b) {
  return a * b;
}

//divides a by b and returns the result
function divide(a, b) {
  return a / b;
}

//increments n and returns the result
function inc(n) {
  return ++n;
}

//decrements n and returns the result
function dec(n) {
  return --n;
}

//parses n as an integer and returns the parsed integer
function makeInt(n) {
  return parseInt(n, 10);
}

//preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
  return parseFloat(n);
}