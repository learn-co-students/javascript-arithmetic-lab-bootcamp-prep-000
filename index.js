var a = 1275
var b = 1
function add(a,b) {
  return a+b
}
add()

function subtract(a,b) {
  return a-b
}
subtract()

function multiply(a,b) {
  return a*b
}
multiply()

function divide(a,b) {
  return a/b
}
divide()

var n = 3.5
function inc(n) {
  return n += 1
}
inc()

function dec(n) {
  return n -= 1
}
dec()

function makeInt(n) {
  return parseInt(n,10)
}
makeInt()


function preserveDecimal(n) {
  return parseFloat(n)
}
preserveDecimal()
