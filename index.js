//add(a, b) adds two numbers and returns the result
function add(a, b) {
  var result = a + b
  return result
}

//subtract(a, b) subtracts b from a and returns the result
function subtract(a, b) {
  var result = a - b
  return result
}

//multiply(a, b) multiplies two numbers and returns the result
function multiply(a, b) {
  var result = a * b
  return result
}

//divide(a, b) divides a by b and returns the result
function divide(a, b) {
  var result = a / b
  return result
}

//inc(n) increments n and returns the result
function inc(n) {
  //var result = ++n
  var result = n += 1
  return result
}

//dec(n) decrements n and returns the result
function dec(n) {
  //var result = --n
  var result = n -= 1
  return result
}

//makeInt(n) parses n as an integer and returns the parsed integer
function makeInt(n){
  var result = parseInt(n, 10)
  return result
}

//preserveDecimal(n) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n) {
  var result = parseFloat (n)
  return result
}