function add(a, b) {
var number = a+b
return number
}

function subtract (a, b) {
var  number = a-b
  return a-b
}

function multiply (a, b) {
  var number = a*b
  return a*b
}

function divide (a,b) {
  var number = a/b
  return number
}

function inc(a) {
  var n=a+1
  return n
}

function dec(a) {
  var number=a-1
  return number
}

let k = Math.floor(Math.random() * 1000);
function makeInt(k){
return parseInt(k, 10);
}
makeInt(k);

let l = Math.floor(Math.random() * 1000);
function preserveDecimal(l){
return parseFloat(l, 10);
}
preserveDecimal(l);
