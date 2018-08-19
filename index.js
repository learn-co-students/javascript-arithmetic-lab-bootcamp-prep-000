function add(a, b) {
  return (a+b) 
}

function subtract(a, b) {
  return (a-b)
}

function multiply(a, b) {
  return (a*b)
}

function divide(a, b) {
  return (a/b)
}

function inc(n) {
  var number = n
  number += 1
  return number
}

function dec(n) {
  var number = n 
  number -= 1 
  return number
}

function makeInt(n) {
  var number = parseInt(n, 10)
  return number
}

function preserveDecimal(n) {
  var number = parseFloat(n)
  return number
}