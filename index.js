// solutions

var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

//add
function add(a, b) {
 /* a = parseFloat('a')
  b = parseFloat('b') */
  var sum = (a + b)
  return sum
}

//subtract
function subtract(a, b) {
  return (a - b)
}

//multiply  
function multiply(a, b) {
  return (a * b)
}

//divide
function divide(a, b) {
  return (a / b)
}

//inc
function inc(a) {
  return (a + 1)
}

//dec
function dec(a) {
  return (a - 1)
}

//makeInt
function makeInt(a) {
  return parseInt(a, 10)
}

//preserveDecimal
function preserveDecimal(a) {
  return parseFloat(a)
}