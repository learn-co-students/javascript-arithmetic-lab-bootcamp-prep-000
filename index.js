var a = 10
var b = 5

function add(a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b) {
  return a / b
}

var n = 5

function inc(n) {
  return ++ n
}

function dec(n) {
  return -- n
}

function makeInt(n) {
  return parseInt(n)
}

function makeInt(n) {
  return parseInt(n,10)
}
var n = "nonsense!"
function makeInt(n) {
  return parseInt(n,10)
}
var n = 10.3453465
function preserveDecimal(n) {
  return parseFloat(n)
}
