var a = 10
var b = 5
var c = "20"
var d = "45.222"


function add(a, b){
return a + b
}

function subtract(a, b) {
return a- b
}

function multiply(a, b) {
return a * b
}

function divide(a, b) {
return a / b
}

function inc(a) {
  return a+= 1
}

function dec(a) {
  return a-= 1
}

function makeInt(c) {
  return parseInt(c, 10)
}

function preserveDecimal(d) {
  return parseFloat(d, 10)
}
