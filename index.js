var a = 1
var b = 2
function add(a, b) {
  return a + b
}

var c = 20
var d = 10
function subtract(c, d) {
  return c - d
}

var a = 3
var b = 9
function multiply(a, b) {
  return a * b
}

var a = 10
var b = 2
function divide(a, b) {
  return a / b
}

var n = 10
function inc(n) {
  return n += 1
}

var n = 20
function dec(n) {
  return n -= 1
}

var n = "2"
function makeInt(n) {
  return parseInt(n, 10)
}

var n = "10.256"
function preserveDecimal(n) {
  return parseFloat(n, 10)
}
