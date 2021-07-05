var a = 2
var b = 3
var n = 0
function add (a,b) {
  return a + b
}
function subtract (a,b) {
  return a - b
}
function multiply (a,b) {
  return a * b
}
function divide (a,b) {
  return a / b
}
function inc (n) {
  return ++n
}
function dec (n) {
  return --n
}
function makeInt (n) {
  return n
}
function makeInt (n) {
  var parsed = parseInt (n, 10)
  return parsed
}
function preserveDecimal (n) {
  var float = parseFloat(n, 100)
  return float
}
