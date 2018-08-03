function add(a, b){
  var number = 0
  number = a + b
  return number
}

function subtract(a, b){
  var number = 0
  number = a - b
  return number
}

function multiply(a, b){
  var number = 0
  number = a * b
  return number
}

function divide(a, b){
  var number = 0
  number = a / b
  return number
}

function inc(n){
  var number = n
  number = ++n
  return number
}

function dec(n){
  var number = n
  number = --n
  return number
}

function makeInt(n){
  n = parseInt (n, 10)
  return n
}

function preserveDecimal(n){
  n = parseFloat (n)
  return n
}