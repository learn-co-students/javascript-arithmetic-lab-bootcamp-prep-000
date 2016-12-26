function add(a, b) {
  return a += b;
}

function subtract(a, b) {
  return a -= b;
}

function multiply(a, b) {
  return a *= b;
}

function divide(a, b) {
  return a /= b;
}

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

// Turns a string into an integer(whole number)
// using parseInt(x, 10) and returns the result
function makeInt(n) {
  return parseInt(n, 10);
}

// Turns variable (n) into a floating point number
// (number with decimal) and returns the result
function preserveDecimal(n) {
  return parseFloat(n);
}
