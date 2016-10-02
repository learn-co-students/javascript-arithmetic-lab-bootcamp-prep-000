// add two numbers together
function add(a, b) {
  return(a + b);
}

// subtract a - b
function subtract(a, b) {
  return(a - b);
}

// multiply two numbers together
function multiply(a, b) {
  return(a * b);
}

// divide a by b
function divide(a, b) {
  return(a / b);
}

// increment number
function inc(a) {
  return(a += 1);
}

// decrement number
function dec(a) {
  return(a -= 1);
}

// parses n as an integer
function makeInt(n) {
  return parseInt(n);
}

// parses n as an integer assumes base 10
var n = 0x2328
function makeInt(n) {
  return parseInt(n, 10);
}

// returns NaN as appropriate
function inNaN() {
  return parseInt('sldkjflksjf');
}

// parses n as a floating point number and returns the parsed number
var n = 2.222
function preserveDecimal(n) {
  return parseFloat(n);
}

// returns NaN as appropriate
function inNaN() {
  return parseFloat('sldkjflksjf');
}
