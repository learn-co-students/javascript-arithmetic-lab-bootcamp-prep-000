var a = 2
var b = 3


function add(a, b){

  return a+b
}

function subtract(a, b){
  return a-b
}

function multiply(a, b){
  return a*b
}

function divide(a,b){
  return a/b
}

function inc(a){
  return ++a
}

function dec(a){
  return --a
}

var c = 2.333


function makeInt(c){
  return parseInt(c,10)
}

function preserveDecimal(c){
  return parseFloat(c,10)
}

add(a,b)
subtract(a,b)
multiply(a,b)
divide(a,b)
inc(a)
dec(a)
makeInt(c)
preserveDecimal(c)
