var a = 10
var b = 5

function add(a,b){
  return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
}

var n = 15
function inc(n){
  return n += 1
}

function dec(n){
  return n -= 1
}

var n = '15'
function makeInt(n){
  return parseInt(n,10)
}

var n = '5.12345'
function preserveDecimal(n){
  return parseFloat(n)
}
