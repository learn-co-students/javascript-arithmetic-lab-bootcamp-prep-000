var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b) {
  var math = a + b;
  return math
}
add()

function subtract(a, b) {
  var math = a - b;
  return math
}
subtract()

function multiply(a, b) {
  var math = a * b;
  return math
}
multiply()

function divide(a, b) {
  var math = a / b;
  return math
}
divide()

function inc(a) {
  var math = ++a;
  return math
}
inc()

function dec(a) {
  var math = --a;
  return math 
}
dec()

function makeInt(a) {
  parseInt(a)
}
makeInt()