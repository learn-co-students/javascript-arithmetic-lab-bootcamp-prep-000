
var a = 5
var b = 6

function add(a,b){
  
  return a+b
}
function subtract(a,b){
  
  return a-b
}

function multiply(a,b){
  
  return a*b
}
function divide(a,b){
  
  return a/b
}

function inc(a){
  return ++a
}
function dec(b){
  return --b
}
function makeInt(a){
  return parseInt(a,10)
}
var nonInt = 5.78
function makeInt(nonInt){
  return parseInt(nonInt,10)
}

var nan = "nonsense"
function makeInt(nan){
  return parseInt(nan,10)
}

function preserveDecimal(value){
 return parseFloat(value)
}
