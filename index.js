
function add(a, b) {
  add = a + b
  return add;
}

function subtract(a, b) {
  subtract = a - b
  return subtract;
}

function multiply(a, b) {
  multiply = a * b
  return multiply;
}

function divide(a, b) {
  divide = a / b
  return divide;
}

function inc(n) {
  inc = n++
  inc = n++
  return inc;
}

function dec(n) {
  dec = n--
  dec = n--
  return dec;
}
// makeInt(n) parses n as an integer and returns the parsed integer
function makeInt(n) {
  parseInt('n', 10)
  return parseInt;
}

// preserveDecimal(n) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
  parseFloat('n', 10)
  return parseFloat;
}
