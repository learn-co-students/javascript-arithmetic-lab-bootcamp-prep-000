function add(a, b) {
  return a + b 
}
add(600, 99)

function subtract(a, b) {
  return a - b
}
subtract(200, 50)

function multiply(a, b) {
  return a * b
}
multiply(30, 4)

function divide(a, b) {
  return a / b
}
divide(40, 5)

function inc(n) {
  return n += 1
}
inc(270) 

function dec(n) {
  return n +- 1
}
inc(270) 

function makeInt(n, base) {
  var parsed = parseInt(n, 10);
  if (isNaN(parsed)) {return NaN}
  return parsed
}
makeInt(2, base)

function preserveDecimal(n) {
  var float = parseFloat(n);
  if (isNaN(float)) {return NaN}
  return float
}
preserveDecimal(6.343453)