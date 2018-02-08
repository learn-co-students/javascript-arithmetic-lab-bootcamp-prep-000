function add(a,b) {
  return a + b
}
function subtract(b,a) {
  return b - a
}
function multiply(a,b) {
  return a * b
}
function divide(a,b) {
  return a / b
}
function inc(a) {
  return a + 1
}
function dec(a) {
  return a - 1
}
function makeInt(n) {
// convert n to an interger
// we should return the value of that interger
// n is a string
//parseInt('2.2222', 10) converts a string to an interger
  return parseInt(n, 10)
}
function preserveDecimal(n) {
  return parseFloat(n, '2.222')
}
