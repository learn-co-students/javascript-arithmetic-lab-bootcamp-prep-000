//1 add(a, b) adds two numbers and returns the result
function add(a, b) {
  return a + b
add(1, 2)
}

//2 subtract(a, b) subtracts b from a and returns the result
function subtract(a, b) {
  return a - b
subtract(3, 4)
}

//3 multiply(a, b) multiplies two numbers and returns the result
function multiply(a, b) {
  return a * b
multiply(5, 6)
}

//4 divide(a, b) divides a by b and returns the result
function divide(a, b) {
  return a / b
divide(7, 8)
}

//5 inc(n) increments n and returns the result
var n = 5;
function inc(n){
  n++
  return n
}

//6 dec(n) decrements n and returns the result
var n = 5;
function dec(n){
  n--
  return n
}

//7 --- makeInt(n) parses n as an integer and returns the parsed integer
function makeInt(n) {
  return parseInt(n, 10)
}

//8 makeInt(n) assumes base 10


//9 --- makeInt(n) returns NaN as appropriate


//10 --- preserveDecimal(n) preserves n's decimals (it parses n as a floating point number) and returns the parsed number:
function preserveDecimal(n) {
  return parseFloat(n, 1000)
}
//11 --- preserveDecimal(n) returns NaN as appropriate
