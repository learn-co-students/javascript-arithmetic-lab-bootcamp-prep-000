var x= 1
var y= 80
function add(x, y) {
  return x + y
}

var x= 60
var y= 40
function subtract(x, y) {
  return x - y
}

var x= 2
var y= 3.4
function multiply(x, y) {
  return x * y
}

var x= 5.0
var y= 2.5
function divide(x, y) {
  return x / y
}

number = 2
function inc(number) {
  return ++number
}

function dec(number) {
  return --number
}

var number = '5'
function makeInt(number) {
  return number
}

var number = 5.5555555
function makeInt(number) {
  return parseInt(number, 10)
}

var number = 'nonsense'
function preserveDecimal(number) {
  return number
}

var number = '2.222222'
function preserveDecimal(number) {
  return parseFloat(number)
}
