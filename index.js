/* Basic Math Functions */

function add(a, b){
  var sum = a+b
  return sum
}

function subtract(a, b){
  var difference = a-b
  return difference
}

function multiply(a, b) {
  var product = a*b
  return product
}

function divide(a, b){
  var quotient = a/b
  return quotient
}

function increment(n) {
  var number = n
  number++
  return number
}

function decrement(n) {
  var number = n
  number--
  return number
}

function makeInt(n) {
  var integer = parseInt(n, 10)
  return (integer)
}

function preserveDecimal(n) {
  var num = parseFloat(n)
  return num
}