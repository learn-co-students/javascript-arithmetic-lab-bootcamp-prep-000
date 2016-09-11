// add two numbers together
function add(a,b) {
  return a + b
}

// subtract a - b
function subtract(a,b) {
  return a - b
}

// multiply two numbers together
function multiply(a,b) {
  return a * b
}

// divide a by b
function divide(a,b) {
  return a/b
}

// increment n
function inc(n) {
  n++
  // number is incremented after it is evaluated
  return n
}

// decrement n
function dec(n) {
  n--
// number is decremented after it is evaluated
  return n
}

// parse n as an integer
function makeInt(n) {
  return parseInt(n, 10)
}

// parse n as a float
function preserveDecimal(n) {
  return parseFloat(n)
}
